import assert from 'assert'
import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('http://localhost:3000/graphql')

function createVariables (variables) {
  return Object.keys(variables).reduce((expression, key, i) => {
    let value = variables[key]
    if (typeof variables[key] === 'object') {
      value = Object.keys(variables[key]).reduce((expression2, key2, i2) => {
        let value = variables[key][key2]
        if (typeof variables[key][key2] === 'string') {
          value = `"${value}"`
        }
        return expression2 + `${key2}: ${value}` + (
          i2 === (Object.keys(variables[key]).length - 1) ? '' : ', '
        )
      }, '')
      value = `{${value}}`
    }
    return expression + `${key}: ${value}` + (
      i === (Object.keys(variables).length - 1) ? '' : ', '
    )
  }, '')
}


async function testQuery (name, field, variables, testResult = true) {
  test(name, async () => {
    const result = await graphql('query', name, field, variables)
    assert(testResult === (!!result[name] && !!Object.keys(result[name]).length))
  })
}

async function testMutation (name, variables) {
  test(name, async () => {
    const result = await graphql('mutation', name, 'success', variables)
    assert(result[name] && result[name].success)
  })
}

async function graphql (type, name, field, variables) {
  return client.request(`
    ${type} {
      ${name}(${createVariables(variables)}) {
        ${field}
      }
    }
  `)
}

suite('User')

testMutation('createUser', {
  input: { username: 'a', bio: 'a' },
})
testQuery('user', 'username', {
  keys: { username: 'a' },
})
testQuery('users', 'username', {
  limit: 10,
})

testMutation('updateUser', {
  keys: { username: 'a' },
  input: { bio: 'b' },
})
testMutation('deleteUser', {
  keys: { username: 'a' }
})
testQuery('users', 'username', {
  limit: 10,
}, false)
