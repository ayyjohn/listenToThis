# == Schema Information
#
# Table name: tracks
#
#  id                         :integer          not null, primary key
#  title                      :string           not null
#  release_date               :date             not null
#  description                :text
#  genre                      :string           not null
#  user_id                    :string           not null
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#  album_artwork_file_name    :string
#  album_artwork_content_type :string
#  album_artwork_file_size    :integer
#  album_artwork_updated_at   :datetime
#  mp3_file_file_name         :string
#  mp3_file_content_type      :string
#  mp3_file_file_size         :integer
#  mp3_file_updated_at        :datetime
#

require 'test_helper'

class TrackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
