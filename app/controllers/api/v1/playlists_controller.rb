class Api::V1::PlaylistsController < ApiController
  def index
    render json: Playlist.all
  end

  def show 
    render json: Playlist.find(params[:id])
  end

  def create
    playlist = Playlist.new(playlist_params)
    playlist.user = current_user

    if playlist.save
      render json: playlist
    else
      render json: { errors: playlist.errors.full_messages.to_sentence }
    end
  end

  def destroy
    Playlist.destroy(params[:id])
  end

  # def update
  #   playlist = Playlist.find(params[:id])
  #   playlist.update_attributes(playlist_params)
    
  #   render json: playlist
  # end

  private
  def playlist_params
    params.require(:playlist).permit(:title, :description, :genre)
  end
end