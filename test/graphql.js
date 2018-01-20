import 'babel-polyfill'

import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('http://localhost:3000/graphql')

let request

beforeEach(() => {
  request = ''
})

function run () {
  return client.request(request)
}

suite('Artist')

test('createArtist', async () => {
  request = `
    mutation {
      createArtist(first_name: "first", last_name: "last", songs: []) {
        id
      }
    }
  `
  await run()
})
