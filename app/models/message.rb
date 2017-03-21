class Message < ApplicationRecord
  belongs_to :user

  default_scope -> { order(created_at: :desc) }

  validates_presence_of :user_id

  validates :content, length: { maximum: 335 }

  validate :content_or_picture_presence

  mount_uploader :picture, PictureUploader

  def content_or_picture_presence
    if content.blank? && picture.blank?
      errors[:base] << "Content or picture must presence."
    end
  end

end
