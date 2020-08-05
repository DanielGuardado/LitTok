json.extract! video, :id, :description, :uploader_id
# , :comments

json.videoUrl url_for(video.video)
json.username video.user.username
json.commentCount video.comments.count
json.likeCount video.likes.count
json.comments video.comments do |comment|
  json.author comment.author.username
  json.comment comment
  json.commentCount
end