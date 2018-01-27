function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function get (db, name) {
  return { [name]: (_, args) => db.get(args) }
}

export function getAll (db, name) {
  return { [name + 's']: (_, args) => db.getAll(args) }
}

export function create (db, name) {
  return { ['create' + capitalize(name)]: (_, args) => db.put(args) }
}

export function update (db, name) {
  return { ['update' + capitalize(name)]: (_, args) => db.update(args) }
}

export function del (db, name) {
  return { ['delete' + capitalize(name)]: (_, args) => db.del(args) }
}

export default function (db, name) {
  return {
    Query: {
      ...get(db, name),
      ...getAll(db, name),
    },
    Mutation: {
      ...create(db, name),
      ...update(db, name),
      ...del(db, name),
    },
  }
}
