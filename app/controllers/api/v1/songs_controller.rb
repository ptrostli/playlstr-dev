class Api::V1::SongsController < ApiController
  def create
    #  to do
  end
  
  private
  def song_params
    params.require(:playlist).permit(:name, :artist, :album, :length, :release_date, :genre)
  end
end