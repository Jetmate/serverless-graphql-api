export default `
type User {
  username: String!
  bio: String
  courses: [CourseInfo]!
}

type CourseInfo {
  type: CourseStatus!
  course: Course!
}

enum CourseStatus {
  ACTIVE
  COMPLETED
  CREATED
}


input userKeysInput {
  username: String!
}

type Query {
  user(keys: userKeysInput!): User
  users(limit: Int): [User]!
}


input createUserInput {
  username: String!
  bio: String!
}

input updateUserInput {
  bio: String
  courses: [CourseInfoInput]
}

input CourseInfoInput {
  type: CourseStatus!
  course: String!
}

type Mutation {
  createUser(input: createUserInput!): Result!
  updateUser(keys: userKeysInput!, input: updateUserInput!): Result!
  deleteUser(keys: userKeysInput!): Result!
}
`
