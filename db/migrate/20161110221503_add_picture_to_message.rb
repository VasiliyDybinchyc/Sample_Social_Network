class AddPictureToMessage < ActiveRecord::Migration[5.0]
  def change
    add_column :messages, :picture, :string
  end
end
