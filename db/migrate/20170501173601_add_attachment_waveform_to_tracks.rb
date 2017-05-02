class AddAttachmentWaveformToTracks < ActiveRecord::Migration
  def self.up
    change_table :tracks do |t|
      t.attachment :waveform
    end
  end

  def self.down
    remove_attachment :tracks, :waveform
  end
end
