import * as db from './dynamo'

export function stringExpression (update, beginning = '') {
  return Object.keys(update).reduce(([expression, values], val, i) => {
    return [
      expression + `${val} = :${val}` + (
        i === (Object.keys(update).length - 1) ? '' : ', '
      ),
      {...values, [':' + val]: update[val]}
    ]
  }, [beginning, {}])
}

export default class Boilerplate {
  constructor (tableName) {
    this.tableName = tableName
  }

  // async batchGet ({ ids }) {
  //   const result = await db.batchGet({ RequestItems: {
  //     [this.tableName]: { Keys: ids.map(id => ({ id })) }
  //   } })

  //   console.log(result)
  //   return result[this.tableName]
  // }

  // async batchPut (items) {
  //   const result = await db.batchWrite({ RequestItems:
  //     items.map(Item => ({ PutRequest: { Item } }))
  //   })

  //   console.log(result)
  // }

  // async batchDel (ids) {
  //   const result = await db.batchWrite({ RequestItems:
  //     ids.map(id => ({ DeleteRequest: { Key: { id } } }))
  //   })

  //   console.log(result)
  // }

  async getAll ({ keys, limit: Limit }) {
    let result
    if (keys) {
      const [KeyConditionExpression, ExpressionAttributeValues] = stringExpression(keys)
      result = await db.query({ TableName: this.tableName, Limit, KeyConditionExpression, ExpressionAttributeValues })
    } else result = await db.scan({ TableName: this.tableName, Limit })

    console.log('getAll', result)
    return result.Items
  }

  async get ({ keys: Key }) {
    const result = await db.get({ TableName: this.tableName, Key })

    console.log('get', result)
    return result.Item
  }

  async put ({ input: Item }) {
    const result = await db.put({
      TableName: this.tableName,
      Item,
    })

    console.log('put', result)
    return { success: true }
  }

  async update ({ keys: Key, input }) {
    const [UpdateExpression, ExpressionAttributeValues] = stringExpression(input, 'SET ')

    const result = await db.update({
      TableName: this.tableName,
      Key,
      UpdateExpression,
      ExpressionAttributeValues,
      ReturnValues: 'ALL_OLD',
    })

    console.log('update', result)
    return { success: !!Object.keys(result).length }
  }

  async del ({ keys: Key }) {
    const result = await db.del({
      TableName: this.tableName,
      Key,
      ReturnValues: 'ALL_OLD',
    })

    console.log('del', result)
    return { success: !!Object.keys(result).length }
  }
}
