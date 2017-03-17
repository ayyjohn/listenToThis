class AddAttachmentMp3FileToTracks < ActiveRecord::Migration
  def self.up
    change_table :tracks do |t|
      t.attachment :mp3_file
    end
  end

  def self.down
    remove_attachment :tracks, :mp3_file
  end
end
