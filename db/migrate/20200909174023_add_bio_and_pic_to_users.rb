class AddBioAndPicToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :pro_pic, :string, :default => "https://www.vippng.com/png/full/416-4161690_empty-profile-picture-blank-avatar-image-circle.png"
    add_column :users, :bio, :string, :default => ""
  end
end
