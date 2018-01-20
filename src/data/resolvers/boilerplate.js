function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default function (db, name) {
  return {
    Query: {
      [name + 's']: () => db.getAll(),
      [name]: (_, args) => db.get(args.id),
    },
    Mutation: {
      ['create' + capitalize(name)]: (_, args) => db.put(args),
      ['update' + capitalize(name)]: (_, args) => {
        const { id, ...item } = args
        db.update(id, item)
      },
      ['delete' + capitalize(name)]: (_, args) => db.delete(args.id),
    },
  }
}
