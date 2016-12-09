class CreateGallery < ActiveRecord::Migration[5.0]
  def change
    create_table :galleries do |t|
      t.string    :picture
      t.references :user, foreign_key: true

      t.timestamps null: false
    end
    add_index :galleries, [:user_id, :created_at]
  end
end
