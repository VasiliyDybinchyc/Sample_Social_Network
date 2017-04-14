class PersonalUserInfo < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :phone_number, :string
    add_column :users, :favorite_book, :string
    add_column :users, :favorite_film, :string
    add_column :users, :avatar, :string
  end
end
