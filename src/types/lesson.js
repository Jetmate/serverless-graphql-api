export default `
type Lesson {
  title: String!
  course: Course!
  slides: [Slide]!
}

input lessonKeysInput {
  title: String!
  course: String!
}

input lessonsKeysInput {
  course: String!
}

extend type Query {
  lesson(keys: lessonKeysInput!): Lesson
  lessons(keys: lessonsKeysInput!, limit: Int): [Lesson]!
}


input createLessonInput {
  title: String!
  course: String!
}

input editLessonInput {
  title: String
  slides: [Slide]
}

extend type Mutation {
  createLesson(input: createLessonInput!): Lesson
  editLesson(keys: lessonKeysInput!, input: editLessonInput!): Lesson
  deleteLesson(keys: lessonKeysInput!): Lesson
}
`
