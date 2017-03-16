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

class Track < ApplicationRecord

  validates :name, :release_date, :genre, :user, presence: true

  belongs_to :user
  has_many :comments, dependent: :destroy
end
