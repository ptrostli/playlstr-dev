class Api::V1::PlaylistsController < ApiController
  before_action :authenticate_user, except: [:index, :show]
  before_action :authorize_user, except: [:index, :show, :create, :destroy]

  def index
    playlists = Playlist.all
    render json: Playlist.all
  end

  def show 
    playlist = Playlist.find(params[:id])
    render json: Playlist.find(params[:id])
  end

  def new
    playlist = Playlist.new
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

  def authorize_user
    if !user_signed_in? || !(current_user.role == "member") || !(current_user.role == "admin")
      render json: {error: ["Only admins have access to this feature"]}
    end
  end

  def authenticate_user
    if !user_signed_in?
      render json: {error: ["You need to be signed in first"]}
    end
  end
end