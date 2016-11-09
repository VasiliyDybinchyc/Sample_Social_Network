class PersonalUserInfo < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :name
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :phone_number, :string
    add_column :users, :favorite_book, :string
    add_column :users, :favorite_film, :string
    add_column :users, :avatar, :string
    add_index :users, :email, unique: true
  end
end
