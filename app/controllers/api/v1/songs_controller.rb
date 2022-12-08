class Api::V1::SongsController < ApiController
  before_action :authenticate_user!

  def create
    playlist = Playlist.find(params[:playlist_id])
    song = Song.find_or_initialize_by(song_params)
    playlist.songs << song
    playlist.save!

    render json: playlist
  end

  private
  def song_params
    params.require(:song).permit(:name, :artist, :album, :length, :spotify_id)
  end
end