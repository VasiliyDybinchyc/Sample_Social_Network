class Gallery < ApplicationRecord
  belongs_to :user

  default_scope -> { order(created_at: :desc) }

  validates_presence_of :user_id, :picture

  mount_uploader :picture, PictureGalleryUploaderUploader
end
