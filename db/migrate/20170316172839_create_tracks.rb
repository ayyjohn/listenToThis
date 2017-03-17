class CreateTracks < ActiveRecord::Migration[5.0]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.date :release_date, null: false
      t.text :description
      t.string :genre, null: false
      t.string :user_id, null: false
      t.timestamps
    end
    add_index :tracks, :title
    add_index :tracks, :genre
    add_index :tracks, :user_id
  end
end
