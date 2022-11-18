class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :name, null:false 
      t.string :artist, null:false 
      t.string :album, null:false 
      t.string :length, null:false 
      t.string :release_date, null:false 
      t.string :genre, null:false 

      t.belongs_to :playlist

      t.timestamps
    end
  end
end

# Subject to Spotify API