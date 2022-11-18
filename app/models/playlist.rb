class Playlist < ApplicationRecord
  validates :title, presence: true
  
  belongs_to :user
  has_many :songs
end