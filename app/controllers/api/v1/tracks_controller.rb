class Api::V1::TracksController < ApiController
  before_action :authenticate_user!

  def create
    playlist = Playlist.find(params[:playlist_id])
    track = Track.find_or_initialize_by(track_params)
    playlist.tracks << track
    playlist.save!

    render json: playlist
  end

  private
  def track_params
    params.require(:track).permit(:name, :artist, :album, :length, :spotify_id)
  end
end