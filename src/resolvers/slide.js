import dbSlides from 'src/dynamo/slides'
import boilerplate from './boilerplate'

const boiler = boilerplate(dbSlides, 'slide', 'title', 'lesson', 'course')

export default {
  Query: {
    ...boiler.Query,
  },
  Mutation: {
    ...boiler.Mutation,
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
