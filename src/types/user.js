export default `
type User {
  username: String!
  bio: String
  courses: [CourseInfo]!
}

type CourseInfo {
  course: Course!
  type: CourseStatus!
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

input editUserInput {
  username: String
  bio: String
  courses: [String]
}

type Mutation {
  createUser(input: createUserInput!): User
  editUser(keys: userKeysInput!, input: editUserInput!): User
  deleteUser(keys: userKeysInput!): User
}
`
