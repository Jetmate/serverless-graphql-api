export default `
  type Artist {
    id: ID!
    first_name: String!
    last_name: String!
    songs: [Song]!
  }

  type Query {
    artists: [Artist]!
    artist(id: ID!): Artist
  }

  type Mutation {
    createArtist(
      first_name: String!
      last_name: String!
      songs: [Song]!
    ): Artist
    updateArtist(
      id: ID!
      first_name: String
      last_name: String
      songs: [ID]
    ): Artist
    deleteArtist(
      id: ID!
    ): Artist
  }
`
