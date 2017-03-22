json.extract! @track,
              :id,
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
json.set! :comments do
  json.array! @track.comments do |comment|
    json.id comment.id
    json.body comment.body
    json.username comment.user.username
    json.avatar_url comment.user.avatar.url
  end
end
json.album_artwork_url @track.album_artwork.url
json.mp3_file_url @track.mp3_file.url
