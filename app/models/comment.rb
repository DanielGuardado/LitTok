# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  body              :string           not null
#  author_id         :integer          not null
#  parent_comment_id :integer
#  video_id          :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Comment < ApplicationRecord
  validates :author_id, :video_id, :body, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :video,
    primary_key: :id,
    foreign_key: :video_id,
    class_name: :Video

  has_many :likes, as: :likeable

  # belongs_to :parent,
  #   primary_key: :id,
  #   foreign_key: :parent_comment_id,
  #   class_name: :Comment
  # #self referencing thru assosiation
  # has_many :comments,
  #   primary_key: :id,
  #   foreign_key: :parent_id,
  #   class_name: :Comment,
  #   dependent: :destroy
end
