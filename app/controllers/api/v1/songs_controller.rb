class Api::V1::SongsController < ApiController
  # def create
  #   song = Song.new(song_params)
  #   playlist = Playlist.find(params[:playlist_id])
  #   song.playlist = playlist

  #   if song.save
  #     render json: song
  #   else
  #     render json: { errors: song.errors.full_messages.to_sentence}
  #   end
  # end

  # private
  # def song_params
  #   params.require(:playlist).permit(:name, :artist, :album, :length, :release_date, :genre)
  # end
end