json.extract! video, :id, :description, :uploader_id
json.videoUrl url_for(video.video)
json.username video.user.username
json.pro_pic video.user.pro_pic
json.commentCount video.comments.count
json.likeCount video.likes.count
json.commentIds video.comment_ids