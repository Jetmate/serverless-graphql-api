import dbCourses from 'src/dynamo/courses'
import dbUsers from 'src/dynamo/users'
import boilerplate from './boilerplate'

const boiler = boilerplate(dbCourses, 'course', 'title')

export default {
  Query: {
    ...boiler.Query,
  },
  Mutation: {
    ...boiler.Mutation,
  },
  Course: {
    creator: course => {
      return dbUsers.get({ keys: { username: course.creator } })
    },
  },
}
