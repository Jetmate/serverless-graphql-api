import AWS from 'aws-sdk'

const dynamoDb = new AWS.DynamoDB.DocumentClient(process.env.IS_OFFLINE ? {
  region: 'localhost',
  endpoint: 'http://localhost:8000'
} : {})

export function scan (args) {
  return dynamoDb.scan(args).promise()
}

export function get (args) {
  return dynamoDb.get(args).promise()
}

export function put (args) {
  return dynamoDb.put(args).promise()
}

export function update (args) {
  return dynamoDb.update(args).promise()
}

export function del (args) {
  return dynamoDb.delete(args).promise()
}

export function batchGet (args) {
  return dynamoDb.batchGet(args).promise()
}

export function batchWrite (args) {
  return dynamoDb.batchWrite(args).promise()
}
