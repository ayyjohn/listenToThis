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

class Track < ApplicationRecord

  validates :title, :release_date, :genre, :user, presence: true

  belongs_to :user
  has_many :comments #, dependent: :destroy

  has_attached_file :album_artwork, default_url: "https://s3-us-west-1.amazonaws.com/listentothis-dev/no_album.png"
  validates_attachment_content_type :album_artwork, content_type: /\Aimage\/.*\Z/

  has_attached_file :mp3_file, default_url: nil
end
