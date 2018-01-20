import dbSongs from 'src/dynamo/songs'
import dbArtists from 'src/dynamo/artists'
import boilerplate from './boilerplate'
import uuid from 'uuid'

const boiler = boilerplate(dbSongs, 'song')

export default {
  Query: {
    ...boiler.Query,
  },
  Mutation: {
    ...boiler.Mutation,
    createSong: (_, args) => dbSongs.put({ ...args, id: uuid() })
  },
  Song: {
    artist: song => dbArtists.get(song.artist)
  }
}
