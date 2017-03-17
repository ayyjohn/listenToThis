json.extract! @track,
              :title,
              :release_date,
              :description,
              :genre,
              :user_id
json.album_artwork_url @track.album_artwork.url
json.mp3_file_url @track.mp3_file.url
