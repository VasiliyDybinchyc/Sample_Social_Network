class Message < ApplicationRecord
  belongs_to :user

  default_scope -> { order(created_at: :desc) }

  validates_presence_of :user_id, :content

  validates :content, length: { maximum: 200 }
end
