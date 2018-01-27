import dbSlides from 'src/dynamo/slides'
import * as boiler from './boilerplate'

export default {
  Query: {
    ...boiler.get(dbSlides, 'slide'),
    ...boiler.getAll(dbSlides, 'slide'),
  },
  Mutation: {
    ...boiler.del(dbSlides, 'slide'),

    ...boiler.create(dbSlides, 'quizSlide'),
    ...boiler.update(dbSlides, 'quizSlide'),
    ...boiler.create(dbSlides, 'instructionSlide'),
    ...boiler.update(dbSlides, 'instructionSlide'),
    ...boiler.create(dbSlides, 'projectSlide'),
    ...boiler.update(dbSlides, 'projectSlide'),
  },
  Slide: {
    __resolveType: slide => {
      if (slide.questions !== undefined) {
        return 'QuizSlide'
      } else if (slide.hint !== undefined) {
        return 'InstructionSlide'
      } else {
        return 'ProjectSlide'
      }
    }
  }
}
