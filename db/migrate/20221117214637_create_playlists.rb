class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.string :title, null:false
      t.string :description
      t.string :genre

      # t.has_many :songs
      # t.belongs_to :user, null:false

      t.timestamps
    end
  end
end
