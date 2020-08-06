json.video do 
  json.partial!('video', video: @video)
end
json.comments do 
  @video.comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
      # json.username comment.author.username
    end
  end
end