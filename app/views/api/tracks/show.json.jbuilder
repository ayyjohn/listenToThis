json.extract! @track,
              :title,
              :release_date,
              :description,
              :genre
json.mp3_file_url @track.mp3_file.url
json.set! :user do
  json.set! :username, @track.user.username
  json.set! :user_id, @track.user.id
  json.set! :avatar_url, @track.user.avatar.url
end
json.album_artwork_url @track.album_artwork.url
json.mp3_file_url @track.mp3_file.url
