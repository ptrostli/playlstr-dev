user_1 = User.create(
  username: "itsyahboi",
  email: "email@email.com",
  password: "password",
  role: "member"
)

user_2 = User.create(
  username: "phil",
  email: "phil@email.com",
  password: "password",
  role: "admin"
)

playlist_1 = Playlist.find_or_create_by(
  title: "A Playlist",
  description: "A Description",
  genre: "Electronic",
  user: user_1
)

playlist_2 = Playlist.find_or_create_by(
  title: "Another Playlist",
  description: "Another Description",
  genre: "Electronic",
  user: user_2
)

song_1 = Song.find_or_create_by(
  name: "A song",
  artist: "A artist",
  album: "A album",
  length: "length",
  release_date: "420",
  genre: "Electronic",
  playlist: playlist_1
)

song_2 = Song.find_or_create_by(
  name: "Another song",
  artist: "Another artist",
  album: "Another album",
  length: "length",
  release_date: "420",
  genre: "Alternative",
  playlist: playlist_1
)

song_3 = Song.find_or_create_by(
  name: "Third song",
  artist: "A artist",
  album: "A album",
  length: "length",
  release_date: "420",
  genre: "Alternative",
  playlist: playlist_2
)