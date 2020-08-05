json.like do
  json.partial! "like", like: @like
end
json.set! @likeable_type.downcase do
  if @likeable_type == "Video"
    @video = Video.find(@likeable_id)
    json.partial! '/api/videos/video', video: @video
  else
    @comment = Comment.find(@likeable_id)
    json.partial! '/api/comments/comment', comment: @comment
  end
end