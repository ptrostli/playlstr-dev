class Api::V1::SearchController < ApiController
  def index
    tracks = RSpotify::Track.search(params["query"]) 

    render json: {tracks: tracks}
  end

  private
  def song_params
    params.require(:playlist).permit(:name, :artist, :album, :length, :release_date, :genre)
  end
end