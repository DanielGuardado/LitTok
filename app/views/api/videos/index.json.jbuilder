@videos.each do |video|
  json.set! video.id do
    json.extract! video, :id, :description, :uploader_id
    json.videoUrl url_for(video.video)
  end
end