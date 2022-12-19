class AddSpotifyInformationToTracks < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :preview_url, :string
    add_column :tracks, :external_url, :string
    add_column :tracks, :artist_url, :string
    add_column :tracks, :image, :string
  end
end
