json.extract! video, :id, :description, :uploader_id, :comments
json.videoUrl url_for(video.video)