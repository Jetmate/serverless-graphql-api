import { graphqlLambda, graphiqlLambda } from 'apollo-server-lambda'
import { makeExecutableSchema } from 'graphql-tools'
import { mergeResolvers, mergeTypes } from 'merge-graphql-schemas'

import * as types from './types'
import * as resolvers from './resolvers'


const schema = makeExecutableSchema({
  typeDefs: mergeTypes(types),
  resolvers: mergeResolvers(resolvers),
})

exports.graphql = (event, context, callback) => {
  const callbackFilter = (error, output) => {
    const outputWithHeader = Object.assign({}, output, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
    callback(error, outputWithHeader)
  }

  graphqlLambda({ schema })(event, context, callbackFilter)
}

exports.graphiql = graphiqlLambda({
  endpointURL: process.env.IS_OFFLINE ? '/graphql' : '/dev/graphql'
})
