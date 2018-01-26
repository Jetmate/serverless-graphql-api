export default [`
  type Result {
    ok: Int!
    n: Int!
  }

  `, `
  type User {
    _id: ID!
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


  type Query {
    users: [User]!
    user(id: ID!): User
  }


  input createUserInput {
    username: String!
  }

  input editUserInput {
    username: String
    bio: String
  }

  type Mutation {
    createUser(input: createUserInput!): User!
    editUser(input: editUserInput!): Result!
    deleteUser: Result!
  }

  `, `
  type Course {
    _id: ID!
    title: String!
    lessons: [Lesson]!
    language: Language!
    creator: User!
  }

  enum Language {
    PYTHON
  }


  extend type Query {
    courses: [Course]!
    course(id: ID!): Course
    titleCourse(title: String!): Course
  }


  input createCourseInput {
    title: String!
    language: Language!
  }

  input editCourseInput {
    title: String
  }

  extend type Mutation {
    createCourse(input: createCourseInput!): Course!
    editCourse(id: ID!, input: editCourseInput!): Result!
    deleteCourse(id: ID!): Result!
  }

  `, `
  type Lesson {
    _id: ID!
    title: String!
    slides: [Slide]!
  }


  extend type Query {
    lesson(id: ID!, course: ID!): Lesson
    titleLesson(course: String!, title: String!): Lesson
  }


  input createLessonInput {
    title: String!
  }

  input editLessonInput {
    title: String
  }

  extend type Mutation {
    createLesson(course: ID!, input: createLessonInput!): Lesson!
    editLesson(id: ID!, course: ID!, input: editLessonInput!): Result!
    deleteLesson(id: ID!, course: ID!): Result!
  }

  `, `
  interface Slide {
    _id: ID!
    title: String!
  }


  extend type Query {
    slide(id: ID!, lesson: ID!, course: ID!): Slide
  }


  extend type Mutation {
    deleteSlide(id: ID!, lesson: ID!, course: ID!): Result!
  }

  `, `
  type QuizSlide implements Slide {
    _id: ID!
    title: String!
    questions: [Question!]!
  }

  type Question {
    title: String!
    answers: [Answer!]!
  }

  type Answer {
    title: String!
    correct: Boolean!
  }


  input createQuizSlideInput {
    title: String!
    questions: [questionInput!]!
  }

  input editQuizSlideInput {
    title: String
    questions: [questionInput]
  }

  input questionInput {
    title: String!
    answers: [answerInput!]!
  }

  input answerInput {
    title: String!
    correct: Boolean!
  }

  extend type Mutation {
    createQuizSlide(lesson: ID!, course: ID!, input: createQuizSlideInput!): Slide!
    editQuizSlide(id: ID!, lesson: ID!, course: ID!, input: editQuizSlideInput!): Result!
  }

  `, `
  type InstructionSlide implements Slide {
    _id: ID!
    title: String!
    description: String!
    hint: String!
    code: String!
    correctOutput: [String!]!
  }

  input createInstructionSlideInput {
    title: String!
    description: String!
    hint: String!
    code: String!
    correctOutput: [String!]!
  }

  input editInstructionSlideInput {
    title: String
    description: String
    hint: String
    code: String
    correctOutput: [String]
  }

  extend type Mutation {
    createInstructionSlide(lesson: ID!, course: ID!, input: createInstructionSlideInput!): Slide!
    editInstructionSlide(id: ID!, lesson: ID!, course: ID!, input: editInstructionSlideInput!): Result!
  }

  `, `
  type ProjectSlide implements Slide {
    _id: ID!
    title: String!
    description: String!
    code: String!
  }

  input createProjectSlideInput {
    title: String!
    description: String!
    code: String!
  }

  input editProjectSlideInput {
    title: String
    description: String
    code: String
  }

  extend type Mutation {
    createProjectSlide(lesson: ID!, course: ID!, input: createProjectSlideInput!): Slide!
    editProjectSlide(id: ID!, lesson: ID!, course: ID!, input: editProjectSlideInput!): Result!
  }
`]
