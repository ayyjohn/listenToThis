json.extract! @track,
              :name,
              :image_url,
              :release_date,
              :description,
              :genre,
              :user_id
json.album_artwork_url @track.album_artwork.url
