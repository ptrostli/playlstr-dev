class Playlist < ApplicationRecord
  validates :title, presence: true
  
  has_many :songs
end