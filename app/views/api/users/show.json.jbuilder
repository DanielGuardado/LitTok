# json.partial! '/api/users/user', user: @user
json.extract! @user, :id, :username, :email, :birthday, :likes, :pro_pic, :bio, :followee_relationships, :follower_relationships