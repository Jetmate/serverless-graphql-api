/* eslint-disable */

// batchGet
var params = {
  RequestItems: { /* required */
    '<TableName>': {
      Keys: [ /* required */
        {
          '<AttributeName>': someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */,
          /* '<AttributeName>': ... */
        },
        /* more items */
      ],
      AttributesToGet: [
        'STRING_VALUE',
        /* more items */
      ],
      ConsistentRead: true || false,
      ExpressionAttributeNames: {
        '<ExpressionAttributeNameVariable>': 'STRING_VALUE',
        /* '<ExpressionAttributeNameVariable>': ... */
      },
      ProjectionExpression: 'STRING_VALUE'
    },
    /* '<TableName>': ... */
  },
  ReturnConsumedCapacity: INDEXES | TOTAL | NONE
};

// batchWrite
var params = {
  RequestItems: { /* required */
    '<TableName>': [
      {
        DeleteRequest: {
          Key: { /* required */
            '<AttributeName>': someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */,
            /* '<AttributeName>': ... */
          }
        },
        PutRequest: {
          Item: { /* required */
            '<AttributeName>': someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */,
            /* '<AttributeName>': ... */
          }
        }
      },
      /* more items */
    ],
    /* '<TableName>': ... */
  },
  ReturnConsumedCapacity: INDEXES | TOTAL | NONE,
  ReturnItemCollectionMetrics: SIZE | NONE
};

// delete
var params = {
  Key: { /* required */
    '<AttributeName>': someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */,
    /* '<AttributeName>': ... */
  },
  TableName: 'STRING_VALUE', /* required */
  ConditionExpression: 'STRING_VALUE',
  ConditionalOperator: AND | OR,
  Expected: {
    '<AttributeName>': {
      AttributeValueList: [
        someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */,
        /* more items */
      ],
      ComparisonOperator: EQ | NE | IN | LE | LT | GE | GT | BETWEEN | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS | BEGINS_WITH,
      Exists: true || false,
      Value: someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */
    },
    /* '<AttributeName>': ... */
  },
  ExpressionAttributeNames: {
    '<ExpressionAttributeNameVariable>': 'STRING_VALUE',
    /* '<ExpressionAttributeNameVariable>': ... */
  },
  ExpressionAttributeValues: {
    '<ExpressionAttributeValueVariable>': someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */,
    /* '<ExpressionAttributeValueVariable>': ... */
  },
  ReturnConsumedCapacity: INDEXES | TOTAL | NONE,
  ReturnItemCollectionMetrics: SIZE | NONE,
  ReturnValues: NONE | ALL_OLD | UPDATED_OLD | ALL_NEW | UPDATED_NEW
};

// get
var params = {
  Key: { /* required */
    '<AttributeName>': someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */,
    /* '<AttributeName>': ... */
  },
  TableName: 'STRING_VALUE', /* required */
  AttributesToGet: [
    'STRING_VALUE',
    /* more items */
  ],
  ConsistentRead: true || false,
  ExpressionAttributeNames: {
    '<ExpressionAttributeNameVariable>': 'STRING_VALUE',
    /* '<ExpressionAttributeNameVariable>': ... */
  },
  ProjectionExpression: 'STRING_VALUE',
  ReturnConsumedCapacity: INDEXES | TOTAL | NONE
};

// put
var params = {
  Item: { /* required */
    '<AttributeName>': someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */,
    /* '<AttributeName>': ... */
  },
  TableName: 'STRING_VALUE', /* required */
  ConditionExpression: 'STRING_VALUE',
  ConditionalOperator: AND | OR,
  Expected: {
    '<AttributeName>': {
      AttributeValueList: [
        someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */,
        /* more items */
      ],
      ComparisonOperator: EQ | NE | IN | LE | LT | GE | GT | BETWEEN | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS | BEGINS_WITH,
      Exists: true || false,
      Value: someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */
    },
    /* '<AttributeName>': ... */
  },
  ExpressionAttributeNames: {
    '<ExpressionAttributeNameVariable>': 'STRING_VALUE',
    /* '<ExpressionAttributeNameVariable>': ... */
  },
  ExpressionAttributeValues: {
    '<ExpressionAttributeValueVariable>': someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */,
    /* '<ExpressionAttributeValueVariable>': ... */
  },
  ReturnConsumedCapacity: INDEXES | TOTAL | NONE,
  ReturnItemCollectionMetrics: SIZE | NONE,
  ReturnValues: NONE | ALL_OLD | UPDATED_OLD | ALL_NEW | UPDATED_NEW
};

// query
var params = {
  TableName: 'STRING_VALUE', /* required */
  AttributesToGet: [
    'STRING_VALUE',
    /* more items */
  ],
  ConditionalOperator: AND | OR,
  ConsistentRead: true || false,
  ExclusiveStartKey: {
    '<AttributeName>': someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */,
    /* '<AttributeName>': ... */
  },
  ExpressionAttributeNames: {
    '<ExpressionAttributeNameVariable>': 'STRING_VALUE',
    /* '<ExpressionAttributeNameVariable>': ... */
  },
  ExpressionAttributeValues: {
    '<ExpressionAttributeValueVariable>': someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */,
    /* '<ExpressionAttributeValueVariable>': ... */
  },
  FilterExpression: 'STRING_VALUE',
  IndexName: 'STRING_VALUE',
  KeyConditionExpression: 'STRING_VALUE',
  KeyConditions: {
    '<AttributeName>': {
      ComparisonOperator: EQ | NE | IN | LE | LT | GE | GT | BETWEEN | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS | BEGINS_WITH, /* required */
      AttributeValueList: [
        someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */,
        /* more items */
      ]
    },
    /* '<AttributeName>': ... */
  },
  Limit: 0,
  ProjectionExpression: 'STRING_VALUE',
  QueryFilter: {
    '<AttributeName>': {
      ComparisonOperator: EQ | NE | IN | LE | LT | GE | GT | BETWEEN | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS | BEGINS_WITH, /* required */
      AttributeValueList: [
        someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */,
        /* more items */
      ]
    },
    /* '<AttributeName>': ... */
  },
  ReturnConsumedCapacity: INDEXES | TOTAL | NONE,
  ScanIndexForward: true || false,
  Select: ALL_ATTRIBUTES | ALL_PROJECTED_ATTRIBUTES | SPECIFIC_ATTRIBUTES | COUNT
};

// scan
var params = {
  TableName: 'STRING_VALUE', /* required */
  AttributesToGet: [
    'STRING_VALUE',
    /* more items */
  ],
  ConditionalOperator: AND | OR,
  ConsistentRead: true || false,
  ExclusiveStartKey: {
    '<AttributeName>': someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */,
    /* '<AttributeName>': ... */
  },
  ExpressionAttributeNames: {
    '<ExpressionAttributeNameVariable>': 'STRING_VALUE',
    /* '<ExpressionAttributeNameVariable>': ... */
  },
  ExpressionAttributeValues: {
    '<ExpressionAttributeValueVariable>': someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */,
    /* '<ExpressionAttributeValueVariable>': ... */
  },
  FilterExpression: 'STRING_VALUE',
  IndexName: 'STRING_VALUE',
  Limit: 0,
  ProjectionExpression: 'STRING_VALUE',
  ReturnConsumedCapacity: INDEXES | TOTAL | NONE,
  ScanFilter: {
    '<AttributeName>': {
      ComparisonOperator: EQ | NE | IN | LE | LT | GE | GT | BETWEEN | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS | BEGINS_WITH, /* required */
      AttributeValueList: [
        someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */,
        /* more items */
      ]
    },
    /* '<AttributeName>': ... */
  },
  Segment: 0,
  Select: ALL_ATTRIBUTES | ALL_PROJECTED_ATTRIBUTES | SPECIFIC_ATTRIBUTES | COUNT,
  TotalSegments: 0
};

// update
var params = {
  Key: { /* required */
    '<AttributeName>': someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */,
    /* '<AttributeName>': ... */
  },
  TableName: 'STRING_VALUE', /* required */
  AttributeUpdates: {
    '<AttributeName>': {
      Action: ADD | PUT | DELETE,
      Value: someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */
    },
    /* '<AttributeName>': ... */
  },
  ConditionExpression: 'STRING_VALUE',
  ConditionalOperator: AND | OR,
  Expected: {
    '<AttributeName>': {
      AttributeValueList: [
        someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */,
        /* more items */
      ],
      ComparisonOperator: EQ | NE | IN | LE | LT | GE | GT | BETWEEN | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS | BEGINS_WITH,
      Exists: true || false,
      Value: someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */
    },
    /* '<AttributeName>': ... */
  },
  ExpressionAttributeNames: {
    '<ExpressionAttributeNameVariable>': 'STRING_VALUE',
    /* '<ExpressionAttributeNameVariable>': ... */
  },
  ExpressionAttributeValues: {
    '<ExpressionAttributeValueVariable>': someValue /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */,
    /* '<ExpressionAttributeValueVariable>': ... */
  },
  ReturnConsumedCapacity: INDEXES | TOTAL | NONE,
  ReturnItemCollectionMetrics: SIZE | NONE,
  ReturnValues: NONE | ALL_OLD | UPDATED_OLD | ALL_NEW | UPDATED_NEW,
  UpdateExpression: 'STRING_VALUE'
};
