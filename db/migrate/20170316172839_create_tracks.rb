class CreateTracks < ActiveRecord::Migration[5.0]
  def change
    create_table :tracks do |t|
      t.string :name, null: false
      t.string :image_url
      t.date :release_date, null: false
      t.text :description
      t.string :genre, null: false
      t.string :user_id, null: false
      t.timestamps
    end
    add_index :tracks, :name
    add_index :tracks, :genre
    add_index :tracks, :user_id
  end
end
