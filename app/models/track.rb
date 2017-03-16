# == Schema Information
#
# Table name: tracks
#
#  id                         :integer          not null, primary key
#  name                       :string           not null
#  image_url                  :string
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
#

class Track < ApplicationRecord

  validates :name, :release_date, :genre, :user, presence: true

  belongs_to :user
  has_many :comments #, dependent: :destroy

  has_attached_file :album_artwork, default_url: "https://s3-us-west-1.amazonaws.com/listentothis-dev/no_album.png"
  validates_attachment_content_type :album_artwork, content_type: /\Aimage\/.*\Z/
end
