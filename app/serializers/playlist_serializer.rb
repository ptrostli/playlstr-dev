class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :title

  belongs_to :user
  has_many :songs
end