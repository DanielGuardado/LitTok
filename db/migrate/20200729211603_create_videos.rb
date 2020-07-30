class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :description
      t.string :uploader_id, null: false
      t.timestamps
    end
    add_index :videos, :uploader_id
  end
end
