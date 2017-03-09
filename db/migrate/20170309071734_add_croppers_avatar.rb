class AddCroppersAvatar < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :croppersAvatar, :string
  end
end
