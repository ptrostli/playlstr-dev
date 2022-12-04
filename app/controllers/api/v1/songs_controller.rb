class Api::V1::SongsController < ApiController
  def create
    tracks = RSpotify::Track.search('') 
    albums = RSpotify::Album.search('')
    artists = RSpotify::Artist.search('')
    playlist = Playlist.find(params[:playlist_id])
    
    playlist.add_tracks!(tracks)
    song = Song.new(song_params)
    song.playlist = playlist

    if song.save
      render json: song
    else
      render json: { errors: song.errors.full_messages.to_sentence}
    end
  end

  def destroy
    
  end

  private
  def song_params
    params.require(:playlist).permit(:name, :artist, :album, :length, :release_date, :genre)
  end
end