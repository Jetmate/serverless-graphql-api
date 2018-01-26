function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function mapKeys (keys, args) {
  return keys.reduce((acc, key) => {
    if (args[key]) acc[key] = args[key]
    return acc
  }, {})
}

export default function (db, name, ...keys) {
  return {
    Query: {
      [name + 's']: (_, args) => db.getAll(...mapKeys(keys, args), args.limit),
      [name]: (_, args) => db.get(...mapKeys(keys, args)),
    },
    Mutation: {
      ['create' + capitalize(name)]: (_, args) => db.put(args.input),
      ['update' + capitalize(name)]: (_, args) => db.update(...mapKeys(keys, args), args.input),
      ['delete' + capitalize(name)]: (_, args) => db.delete(...mapKeys(keys, args)),
    },
  }
}
