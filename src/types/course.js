export default `
type Course {
  title: String!
  lessons: [Lesson]!
  language: Language!
  creator: User!
}

enum Language {
  PYTHON
}


extend type Query {
  courses(limit: Int): [Course]!
  course(title: String!): Course
}


input createCourseInput {
  title: String!
  language: Language!
  creator: User!
}

input editCourseInput {
  title: String
  lessons: [String]
}

extend type Mutation {
  createCourse(input: createCourseInput!): Course!
  editCourse(title: String!, input: editCourseInput!): Result!
  deleteCourse(title: String!): Result!
}
`
