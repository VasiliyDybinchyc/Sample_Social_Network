class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and
  devise :database_authenticatable,
         :registerable,
         :recoverable,
         :rememberable,
         :trackable,
         :validatable,
         :omniauthable

  include DeviseTokenAuth::Concerns::User

  before_validation :set_provider
  def set_provider
    self[:provider] = "email" if self[:provider].blank?
  end

  before_validation :set_uid
  def set_uid
    self[:uid] = self[:email] if self[:uid].blank? && self[:email].present?
  end

  validates :first_name, :length => { maximum: 30 }

  validates :last_name, :length => { maximum: 30 }

  validates_uniqueness_of :nickname

  validates :nickname , presence: true, length: { in: 1..39 }

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

  def follow(other_user)
    active_relationships.create(followed_id: other_user.id)
  end

  def unfollow(other_user)
    active_relationships.find_by(followed_id: other_user.id).destroy
  end

  def following?(other_user)
    following.include?(other_user)
  end

  def feed
    following_ids = "SELECT followed_id FROM relationships
                     WHERE  follower_id = :user_id"
    Message.where("user_id IN (#{following_ids})
                     OR user_id = :user_id", user_id: id).order('created_at DESC')
  end
end
