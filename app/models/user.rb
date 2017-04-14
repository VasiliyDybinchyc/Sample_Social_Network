class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  before_save { self.email = email.downcase }

  validates_presence_of :first_name, :last_name, :email

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates :first_name, :length => { maximum: 30 }

  validates :last_name, :length => { maximum: 30 }

  validates :email, format: { with: VALID_EMAIL_REGEX }

  mount_uploader :avatar, AvatarUploader

  mount_base64_uploader :croppersAvatar, CroppersAvatarUploader

  has_many :messages, dependent: :destroy

  has_many :galleries, dependent: :destroy

  has_many :active_relationships, class_name:  "Relationship",
                                  foreign_key: "follower_id",
                                  dependent:   :destroy

  has_many :passive_relationships, class_name:  "Relationship",
                                    foreign_key: "followed_id",
                                    dependent:   :destroy

  has_many :following, through: :active_relationships, source: :followed

  has_many :followers, through: :passive_relationships, source: :follower

  def feed
    following_ids = "SELECT followed_id FROM relationships
                     WHERE  follower_id = :user_id"
    Message.where("user_id IN (#{following_ids})
                     OR user_id = :user_id", user_id: id).order('created_at DESC')
  end
end
