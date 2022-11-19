class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :created_at, :updated_at, :user_id

  has_many :songs
end