class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :liker_id, null: false
      t.references :likeable, polymorphic: true, index: true
      t.integer :status, nulll: false, default: 0
      t.timestamps
    end
    add_index :likes, [:likeable_type, :likeable_id, :liker_id], unique: true
  end
end
