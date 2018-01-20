export default `
  type Song {
    id: ID!
    title: String!
    artist: Artist!
    duration: Int!
  }

  type Query {
    songs: [Song]!
    song(id: ID!): Song
  }

  type Mutation {
    createSong(
      title: String!
      artist: ID!
      duration: Int!
    ): Song
    updateSong(
      id: ID!
      title: String
      artist: ID
      duration: Int
    ): Song
    deleteSong(
      id: ID!
    ): Song
  }
`
