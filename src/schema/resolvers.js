/* eslint-disable */

import mongoose from 'mongoose'

const NAME_SIZES = {
  user: {
    username: 20,
    bio: 280,
  },
  course: {
    title: 120,
  },
  lesson: {
    title: 120,
  }
}

export default {
  Query: {
    user: async (root, data, { mongo: { Users } }) => {
      return Users.findOne({ _id: data.id })
    },
    users: async (root, data, { mongo: { Users } }) => {
      return Users.find({})
    },

    courses: async (root, data, { mongo: { Courses } }) => {
      return Courses.find({})
    },
    course: async (root, data, { mongo: { Courses } }) => {
      return Courses.findOne({ _id: data.id })
    },
    titleCourse: async (root, data, { mongo: { Courses } }) => {
      return Courses.findOne({ title: data.title })
    },

    lesson: async (root, data, { mongo: { Courses } }) => {
      return (await Courses.findOne({ _id: data.course, 'lessons._id': data.id })).lessons[0]
    },
    titleLesson: async (root, data, { mongo: { Courses } }) => {
      return (await Courses.findOne({ title: data.course, 'lessons.title': data.title })).lessons[0]
    },

    slide: async (root, data, { mongo: { Courses } }) => {
      return (await Courses.findOne({ _id: data.course, 'lessons._id': data.lesson }))
        .lessons[0].slides.filter(slide => slide._id == data.id)[0]
    },
  },

  Mutation: {
    createUser: async (root, data, { mongo: { Users }, newUser }) => {
      if (!newUser) throw new Error('already a user')

      const user = new Users({
        ...data.input,
        _id: newUser,
        bio: '',
        courses: [],
      })

      checkName(user.username, NAME_SIZES.user.username, false)
      if (await Users.count({ username: user.username })) throw new Error('username taken')

      return user.save()
    },

    editUser: async (root, data, { mongo: { Users }, user }) => {
      checkAuth(user)

      if (data.input.username) {
        checkName(data.input.username, NAME_SIZES.user.username, false)
        if (await Users.count({ username: data.input.username })) throw new Error('username taken')
      }

      if (data.input.bio) {
        checkName(data.input.bio, NAME_SIZES.user.bio, false)
      }

      return Users.updateOne({ _id: user._id }, { $set: data.input })
    },

    deleteUser: async (root, data, { mongo: { Users }, debug, user }) => {
      if (!debug) throw new Error('not authorized')
      return (await Users.deleteOne({ _id: user.id })).result
    },

    createCourse: async (root, data, { mongo: { Courses, Users }, user }) => {
      checkAuth(user)

      const course = new Courses({
        ...data.input,
        creator: user._id,
        lessons: [],
      })

      checkName(course.title, NAME_SIZES.course.title)
      if (await Courses.count({ title: course.title })) throw new Error('name taken')

      await Users.updateOne({ _id: user._id }, { $push: { courses: { course: course._id, type: 'CREATED' } } })

      return course.save()
    },

    editCourse: async (root, data, { mongo: { Courses }, user }) => {
      await checkCourseAuth(user, data.id, Courses)

      if (data.input.title) {
        checkName(data.input.title, NAME_SIZES.course.title)
        if (await Courses.count({ title: data.input.title })) throw new Error('name taken')
      }

      return Courses.updateOne({ _id: data.id }, { $set: data.input })
    },

    deleteCourse: async (root, data, { mongo: { Courses }, user }) => {
      await checkCourseAuth(user, data.id, Courses)

      return (await Courses.deleteOne({ _id: data.id })).result
    },

    createLesson: async (root, data, { mongo: { Courses }, user }) => {
      await checkCourseAuth(user, data.course, Courses)

      const lesson = {
        ...data.input,
        slides: [],
        _id: new mongoose.Types.ObjectId(),
      }

      checkName(lesson.title, NAME_SIZES.lesson.title)
      if (await Courses.count({ _id: data.course, lessons: { title: lesson.title } })) throw new Error('name taken')

      await Courses.updateOne({ _id: data.course }, { $push: { lessons: lesson } })
      return lesson
    },

    editLesson: async (root, data, { mongo: { Courses }, user }) => {
      const course = await checkCourseAuth(user, data.course, Courses)

      if (data.input.title) {
        checkName(data.input.title, NAME_SIZES.lesson.title)
        if (await Courses.count({ _id: data.course, lessons: { title: data.input.title } })) throw new Error('name taken')
      }

      // eslint-disable-next-line standard/computed-property-even-spacing
      set(course.lessons[
        course.lessons.reduce((acc, val, i) => val._id == data.id && i, null)
      ], data.input)

      await await course.save()
      return { n: 1, ok: 1 }
    },

    deleteLesson: async (root, data, { mongo: { Courses }, user }) => {
      await checkCourseAuth(user, data.course, Courses)
      return Courses.updateOne({ _id: data.course }, { $pull: { 'lessons': { _id: data.id } } })
    },

    createQuizSlide: createSlide,
    createInstructionSlide: createSlide,
    createProjectSlide: createSlide,
    editQuizSlide: editSlide,
    editInstructionSlide: editSlide,
    editProjectSlide: editSlide,

    deleteSlide: async (root, data, { mongo: { Courses }, user }) => {
      const course = await checkCourseAuth(user, data.course, Courses)

      const lessonI = course.lessons.reduce((acc, val, i) => val._id == data.lesson && i, null)
      // eslint-disable-next-line standard/computed-property-even-spacing
      course.lessons[lessonI].slides.splice(
        course.lessons[lessonI].slides.reduce((acc, val, i) => val._id == data.id && i, null), 1
      )
      await course.save()
      return { n: 1, ok: 1 }
    },
  },

  CourseInfo: {
    course: async (root, data, { mongo: { Courses } }) => {
      return Courses.findOne({ _id: root.course })
    },
  },

  Course: {
    creator: async (root, data, { mongo: { Users } }) => {
      return Users.findOne({ _id: root.creator })
    },
  },

  Slide: {
    __resolveType: async (root) => {
      if (root.questions !== undefined) {
        return 'QuizSlide'
      } else if (root.hint !== undefined) {
        return 'InstructionSlide'
      } else {
        return 'ProjectSlide'
      }
    }
  }
}

function checkName (name, length, whitespace = true) {
  if (!name) throw new Error('please actually enter something')
  checkLength(name, length)
  if (!whitespace) checkWhitespace(name)
}

function checkWhitespace (name) {
  if (/\s/g.test(name)) throw new Error('name can\'t have whitespace')
}

function checkLength (name, length) {
  if (name.length > length) throw new Error(`name can't exceed ${length} characters`)
}

function checkAuth (user) {
  if (!user) throw new Error('not authorized')
}

async function checkCourseAuth (user, courseId, Courses) {
  checkAuth(user)
  const course = await Courses.findOne({ _id: courseId })
  if (user._id !== course.creator) throw new Error('not authorized')
  return course
}

function set (object, properties) {
  for (let property in properties) {
    object[property] = properties[property]
  }
}

async function createSlide (root, data, { mongo: { Courses }, user }) {
  const course = await checkCourseAuth(user, data.course, Courses)

  const slide = {
    ...data.input,
    _id: new mongoose.Types.ObjectId(),
  }

  const lessonI = course.lessons.reduce((acc, val, i) => val._id == data.lesson && i, null)

  course.lessons[lessonI].slides.push(slide)
  await course.save()
  return slide
}

async function editSlide (root, data, { mongo: { Courses }, user }) {
  const course = await checkCourseAuth(user, data.course, Courses)

  const lessonI = course.lessons.reduce((acc, val, i) => val._id == data.lesson && i, null)

  set( // eslint-disable-next-line standard/computed-property-even-spacing
    course.lessons[lessonI].slides[
      course.lessons[lessonI].slides.reduce((acc, val, i) => val._id == data.id && i, null)
    ],
    data.input
  )
  await course.save()
  return { n: 1, ok: 1 }
}
