class Api::V1::PlaylistsController < ApiController
  def index
    render json: Playlist.all
  end
  def show 
    render json: Playlist.find(params[:id])
  end
  # def create

  # end
end