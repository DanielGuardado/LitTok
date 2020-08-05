# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  liker_id      :integer          not null
#  likeable_type :string
#  likeable_id   :bigint
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Like < ApplicationRecord
  validates :liker_id, :likeable_id, :likeable_type, presence: true
  belongs_to :likeable, polymorphic: true
end
#video = Video.first
#video = Video.first
#video.likeable
#video.likes
#####video.likes << Like.new(liker_id:6, likeable_id:100, likeable_type: 'Video')
#video.likes << Like.new(liker_id:8,likeable_type: 'Video')
#always need a new liker id because the same user can't like the same viddeo twice.
#Like.all
#User.first.likes