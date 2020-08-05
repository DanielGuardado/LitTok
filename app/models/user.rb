# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  birthday        :date             not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, :birthday, presence: true
  validates :password, length: { minimum: 6}, allow_nil: true

  attr_reader :password
  after_initialize :ensure_session_token

  has_many :videos,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :Video,
    dependent: :destroy

  has_many :follower_relationships,
  primary_key: :id,
  foreign_key: :follower_id,
  class_name: :Follow,
  dependent: :destroy

  has_many :followee_relationships,
  primary_key: :id,
  foreign_key: :followee_id,
  class_name: :Follow,
  dependent: :destroy

  has_many :followers,
  through: :follower_relationships,
  source: :follower,
  dependent: :destroy

  has_many :followees,
  through: :followee_relationships,
  source: :follwee,
  dependent: :destroy

  has_many :comments,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Comment,
    dependent: :destroy

  has_many :likes,
  primary_key: :id,
  foreign_key: :liker_id,
  class_name: :Like,
  dependent: :destroy

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
  
end
