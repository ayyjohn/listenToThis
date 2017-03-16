# == Schema Information
#
# Table name: tracks
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  image_url    :string
#  release_date :date             not null
#  description  :text
#  genre        :string           not null
#  user_id      :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class TrackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
