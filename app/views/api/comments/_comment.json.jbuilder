json.extract! comment, :id, :body, :author_id, :video_id
json.author comment.author.username
# , :parent_id