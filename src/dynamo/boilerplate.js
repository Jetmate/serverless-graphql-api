import * as db from './dynamo'

function stringExpression (update, beginning = '') {
  return Object.keys(update).reduce(([expression, values], val, i) => {
    return [
      expression + `${val} = :${val}` + (
        i === (Object.keys(update).length - 1) ? '' : ', '
      ),
      {...values, [':' + val]: update[val]}
    ]
  }, [beginning, {}])
}

export default function (TableName) {
  const boilerplate = {}

  boilerplate.batchGet = async ({ ids }) => {
    const result = await db.batchGet({ RequestItems: {
      [TableName]: { Keys: ids.map(id => ({ id })) }
    } })

    console.log(result)
    return result[TableName]
  }

  boilerplate.batchPut = async (items) => {
    const result = await db.batchWrite({ RequestItems:
      items.map(Item => ({ PutRequest: { Item } }))
    })

    console.log(result)
  }

  boilerplate.batchDel = async (ids) => {
    const result = await db.batchWrite({ RequestItems:
      ids.map(id => ({ DeleteRequest: { Key: { id } } }))
    })

    console.log(result)
  }

  boilerplate.getAll = async ({ keys, limit: Limit = 0 }) => {
    let result
    if (keys) {
      const [KeyConditionExpression, ExpressionAttributeValues] = stringExpression(keys)
      result = await db.query({ TableName, Limit, KeyConditionExpression, ExpressionAttributeValues })
    } else result = await db.scan({ TableName, Limit })

    console.log(result)
    return result.Items
  }

  boilerplate.get = async ({ keys: Key }) => {
    const result = await db.get({ TableName, Key })

    console.log(result)
    return result.Item
  }

  boilerplate.put = async ({ input: Item }) => {
    const result = await db.put({
      TableName,
      Item,
    })

    console.log(result)
  }

  boilerplate.update = async ({ keys: Key, input }) => {
    const [UpdateExpression, ExpressionAttributeValues] = stringExpression(input, 'SET ')

    const result = await db.update({
      TableName,
      Key,
      UpdateExpression,
      ExpressionAttributeValues,
    })

    console.log(result)
  }

  boilerplate.del = async ({ keys: Key }) => {
    const result = await db.del({ TableName, Key })

    console.log(result)
  }

  return boilerplate
}
