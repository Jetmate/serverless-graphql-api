export default `
interface Slide {
  title: String!
  lesson: String!
  course: String!
}


input slideKeysInput {
  lesson: String!
  course: String!
}

input slideFilterInput {
  title: String!
}

type Query {
  slide(keys: slideKeysInput!, filter: slideFilterInput!): Slide
  slides(keys: slideKeysInput!, limit: Int): [Slide]!
}


type Mutation {
  deleteSlide(title: String!, lesson: String!, course: String!): Slide
}


type QuizSlide implements Slide {
  title: String!
  lesson: String!
  course: String!
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
  course: String!
  lesson: String!
  questions: [questionInput!]!
}

input updateQuizSlideInput {
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
  createQuizSlide(input: createQuizSlideInput!): Result!
  updateQuizSlide(keys: slideKeysInput!, filter: slideFilterInput!, input: updateQuizSlideInput!): Result!
}


type InstructionSlide implements Slide {
  title: String!
  lesson: String!
  course: String!
  description: String!
  hint: String!
  code: String!
  correctOutput: [String]!
}

input createInstructionSlideInput {
  title: String!
  course: String!
  lesson: String!
  description: String!
  hint: String!
  code: String!
  correctOutput: [String]!
}

input updateInstructionSlideInput {
  title: String
  description: String
  hint: String
  code: String
  correctOutput: [String]
}

extend type Mutation {
  createInstructionSlide(input: createInstructionSlideInput!): Result!
  updateInstructionSlide(keys: slideKeysInput!, filter: slideFilterInput!, input: updateInstructionSlideInput!): Result!
}

type ProjectSlide implements Slide {
  title: String!
  lesson: String!
  course: String!
  description: String!
  code: String!
}

input createProjectSlideInput {
  title: String!
  course: String!
  lesson: String!
  description: String!
  code: String!
}

input updateProjectSlideInput {
  title: String
  description: String
  code: String
}

extend type Mutation {
  createProjectSlide(input: createProjectSlideInput!): Result!
  updateProjectSlide(keys: slideKeysInput!, filter: slideFilterInput!, input: updateProjectSlideInput!): Result!
}

`
