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

async function createTest (type, name, field, variables) {
  test('name', async () => {
    await client.request(`
    ${type} {
      ${name}(${createVariables(variables)}) {
        ${field}
      }
    }
    `)
  })
}

suite('User')

createTest('mutation', 'createUser', 'username', {
  input: { username: 'a', bio: 'a' },
})

createTest('query', 'user', 'username', {
  keys: { username: 'a' },
})
createTest('query', 'users', 'username', {
  limit: 10,
})

createTest('mutation', 'updateUser', 'username', {
  keys: { username: 'a' },
  input: { bio: 'b' },
})
createTest('mutation', 'deleteUser', 'username', {
  keys: { username: 'b' }
})
createTest('query', 'users', 'username', {
  limit: 10,
})
