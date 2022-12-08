class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :name, null:false 
      t.string :artist, null:false 
      t.string :album, null:false 
      t.string :length, null:false 
      t.string :spotify_id

      t.belongs_to :playlist

      t.timestamps
    end
  end
end