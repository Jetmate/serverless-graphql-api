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

input courseKeysInput {
  title: String!
}

type Query {
  courses(limit: Int): [Course]!
  course(keys: courseKeysInput!): Course
}


input createCourseInput {
  title: String!
  language: Language!
  creator: String!
}

type Mutation {
  createCourse(input: createCourseInput!): Course
  updateCourse: Course
  deleteCourse(keys: courseKeysInput!): Course
}
`
