import dbArtists from 'src/dynamo/artists'
import dbSongs from 'src/dynamo/songs'
import boilerplate from './boilerplate'
import uuid from 'uuid'

const boiler = boilerplate(dbArtists, 'artist')

export default {
  Query: {
    ...boiler.Query,
  },
  Mutation: {
    ...boiler.Mutation,
    createArtist: (_, args) => dbArtists.put({...args, id: uuid()})
  },
  Artist: {
    songs: artist => dbSongs.batchGet(artist.songs)
  }
}
