import * as db from './dynamo'

export default function (TableName) {
  const boilerplate = {}

  boilerplate.batchGet = async (ids) => {
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

  boilerplate.getAll = async (limit = 0) => {
    const result = await db.scan({ TableName, limit })

    console.log(result)
    return result.Items
  }

  boilerplate.get = async (id) => {
    const result = await db.get({ TableName, Key: { id } })

    console.log(result)
    return result.Item
  }

  boilerplate.put = async (item) => {
    const result = await db.put({
      TableName,
      Item: {
        ...item,
      }
    })

    console.log(result)
  }

  boilerplate.update = async (id, update) => {
    const [UpdateExpression, ExpressionAttributeValues] = Object.keys(update).reduce(([expression, values], val, i) => {
      return [
        expression + `${val} = :${val}` + (
          i === (Object.keys(update).length - 1) ? '' : ', '
        ),
        {...values, [':' + val]: update[val]}
      ]
    }, ['SET ', {}])

    const result = await db.update({
      TableName,
      Key: { id },
      UpdateExpression,
      ExpressionAttributeValues,
    })

    console.log(result)
  }

  boilerplate.del = async (id) => {
    const result = await db.del({ TableName, Key: { id } })

    console.log(result)
  }

  return boilerplate
}
