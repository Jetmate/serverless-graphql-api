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

input editLessonInput {
  title: String
}

type Mutation {
  createLesson(input: createLessonInput!): Lesson
  editLesson(keys: lessonKeysInput!, input: editLessonInput!): Lesson
  deleteLesson(keys: lessonKeysInput!): Lesson
}
`
