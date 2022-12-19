class TrackSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :album, :length, :spotify_id, :preview_url, :external_url, :image

  belongs_to :playlist
end