# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  description :string
#  uploader_id :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Video < ApplicationRecord
  validates :uploader_id, presence: true
  validate :ensure_video
  has_one_attached :video

  belongs_to :user,
    foreign_key: :uploader_id,
    class_name: :User

  def ensure_video
    unless self.video.attached?
      errors[:video] << "must be attached"
    end
  end
end
