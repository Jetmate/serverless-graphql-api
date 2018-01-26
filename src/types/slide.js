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
  createQuizSlide(input: createQuizSlideInput!): Slide
  editQuizSlide(keys: slideKeysInput!, filter: slideFilterInput!, input: editQuizSlideInput!): Slide
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

input editInstructionSlideInput {
  title: String
  description: String
  hint: String
  code: String
  correctOutput: [String]
}

extend type Mutation {
  createInstructionSlide(input: createInstructionSlideInput!): Slide
  editInstructionSlide(keys: slideKeysInput!, filter: slideFilterInput!, input: editInstructionSlideInput!): Slide
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

input editProjectSlideInput {
  title: String
  description: String
  code: String
}

extend type Mutation {
  createProjectSlide(input: createProjectSlideInput!): Slide
  editProjectSlide(keys: slideKeysInput!, filter: slideFilterInput!, input: editProjectSlideInput!): Slide
}

`
