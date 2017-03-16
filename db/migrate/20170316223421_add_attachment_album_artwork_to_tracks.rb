class AddAttachmentAlbumArtworkToTracks < ActiveRecord::Migration
  def self.up
    change_table :tracks do |t|
      t.attachment :album_artwork
    end
  end

  def self.down
    remove_attachment :tracks, :album_artwork
  end
end
