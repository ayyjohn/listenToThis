json.array! @tracks do |track|
  json.title track.title
  json.mp3_file_url track.mp3_file.url
  json.album_artwork_url track.album_artwork.url
  json.user do
    json.username track.user.username
    json.user_id track.user.id
  end
end
