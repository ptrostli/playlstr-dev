class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :album, :length, :release_date, :genre

  belongs_to :playlist
end