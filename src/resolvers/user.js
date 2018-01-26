import dbUsers from 'src/dynamo/users'
import dbCourses from 'src/dynamo/courses'
import boilerplate from './boilerplate'

const boiler = boilerplate(dbUsers, 'user', 'username')

export default {
  Query: {
    ...boiler.Query,
  },
  Mutation: {
    ...boiler.Mutation,
  },
  CourseInfo: {
    course: courseInfo => {
      return dbCourses.get(courseInfo.course)
    },
  },
}
