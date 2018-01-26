import 'babel-polyfill'

import helmet from 'helmet'
import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import cors from 'cors'
import fetch from 'node-fetch'

// import graphqlHTTP from 'express-graphql'

import schema from './schema'
import mongo from './schema/mongo'

import secrets from '../client_secret.json'
import testingSecret from '../testing_secret.json'

;(async () => {
  const app = express()
  if (process.env.NODE_ENV === 'production') {
    app.listen(3002, '0.0.0.0')
    console.log('RUNNING ON http://0.0.0.0:3002/')
  } else {
    app.listen(3000, '127.0.0.1')
    console.log('RUNNING ON http://127.0.0.1:3000/')
  }

  app.use(helmet())
  app.use(cors())
  app.use('/graphql',
    bodyParser.json(),
    async (req, res, next) => {
      req.context = {}

      if (req.get('Authorization')) {
        const token = req.get('Authorization').split(' ')[1]
        let id

        if (token === testingSecret.token) {
          id = testingSecret.id
          req.context.debug = true
        } else {
          const response = await fetch(
            'https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=' + token
          )
          if (response.status !== 200) {
            res.sendStatus(401)
            return
          }
          const json = await response.json()
          if (json.aud !== secrets.web.client_id || Date.now() > json.exp * 1000) {
            res.sendStatus(401)
            return
          }
          id = json.sub
        }

        const user = await mongo.Users.findOne({ _id: id })
        if (!user) {
          req.context.newUser = id
        } else {
          req.context.user = user
        }
      } else {
        /// /////////////////// DEBUG ONLY
        req.context.user = await mongo.Users.findOne({ _id: '105342380724738854881' })
        req.context.newUser = '105342380724738854881'
        /// //////////////////
      }

      next()
    },
    async (req, res, next) => {
      await graphqlExpress({
        context: { ...req.context, mongo },
        schema,
      })(req, res, next)
    }
    // graphqlHTTP((req, res, next) => {
    //   return {
    //     schema,
    //     context: { ...req.context, mongo },
    //     graphiql: true
    //   }
    // })
  )
  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
  }))
})()
