import Boilerplate from './boilerplate'

class Slides extends Boilerplate {
  getAll ({ keys, limit }) {
    super.getAll({ keys, limit })
  }
}

export default new Slides('lessons')
