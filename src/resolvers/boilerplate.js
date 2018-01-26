function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default function (db, name) {
  return {
    Query: {
      [name + 's']: (_, args) => db.getAll(args),
      [name]: (_, args) => db.get(args),
    },
    Mutation: {
      ['create' + capitalize(name)]: (_, args) => db.put(args),
      ['update' + capitalize(name)]: (_, args) => db.update(args),
      ['delete' + capitalize(name)]: (_, args) => db.delete(args),
    },
  }
}
