import dbLessons from 'src/dynamo/slides'
import boilerplate from './boilerplate'

const boiler = boilerplate(dbLessons, 'lesson', 'title', 'course')

export default {
  Query: {
    ...boiler.Query,
  },
  Mutation: {
    ...boiler.Mutation,
  },
}
