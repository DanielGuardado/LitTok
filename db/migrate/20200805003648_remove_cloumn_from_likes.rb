class RemoveCloumnFromLikes < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :status
  end
end
