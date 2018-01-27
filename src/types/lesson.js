export default `
type Lesson {
  title: String!
  course: Course!
}

input lessonKeysInput {
  title: String!
  course: String!
}

input lessonsKeysInput {
  course: String!
}

type Query {
  lesson(keys: lessonKeysInput!): Lesson
  lessons(keys: lessonsKeysInput!, limit: Int): [Lesson]!
}


input createLessonInput {
  title: String!
  course: String!
}

type Mutation {
  createLesson(input: createLessonInput!): Lesson
  updateLesson: Lesson
  deleteLesson(keys: lessonKeysInput!): Lesson
}
`
