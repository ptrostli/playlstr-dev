User.destroy_all
Playlist.destroy_all
Song.destroy_all

user_1 = User.create(
  username: "demo",
  email: "demo@email.com",
  password: "password",
  role: "user"
)

user_2 = User.create(
  username: "phil",
  email: "phil@email.com",
  password: "password",
  role: "admin"
)


playlist_1 = Playlist.create(
  title: "Beats To Blast!",
  description: "Popular music for hanging out.",
  user: user_1
)

playlist_2 = Playlist.create(
  title: "In The Matrix",
  description: "Music to code to. Mix of lofi beats, electronic, jazz.",
  user: user_2
)

playlist_3 = Playlist.create(
  title: "Sad Boi Vibes",
  description: "For when you're just feeling sad and need to be a sad boi.",
  user: user_2
)

song_1 = Song.create(
  name: "10:35",
  artist: "Tiesto ft. Tate McRae",
  album: "10:35",
  length: "2:52",
  playlist: playlist_1
)

song_2 = Song.create(
  name: "Drift",
  artist: "Syn Cole",
  album: "Drift",
  length: "2:45",
  playlist: playlist_1
)

song_3 = Song.create(
  name: "September",
  artist: "James Arthur",
  album: "September (MENTIS Remix)",
  length: "3:40",
  playlist: playlist_2
)

song_4 = Song.create(
  name: "A Moment Apart",
  artist: "ODESZA",
  album: "A Moment Apart",
  length: "3:54",
  playlist: playlist_2
)

song_5 = Song.create(
  name: "Sweet Disaster",
  artist: "DREAMERS",
  album: "This Album Does Not Exist",
  length: "3:25",
  playlist: playlist_3
)

song_6 = Song.create(
  name: "Will Do",
  artist: "TV On The Radio",
  album: "Nine Types of Light",
  length: "3:45",
  playlist: playlist_3
)

song_7 = Song.create(
  name: "Saturday Nights REMIX",
  artist: "Khalid, Kane Brown",
  album: "Saturday Nights REMIX",
  length: "3:31",
  playlist: playlist_3
)