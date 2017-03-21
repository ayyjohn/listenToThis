json.array! @comments do |comment|
  json.id comment.id
  json.body comment.body
  json.user do
    json.username comment.user.username
    json.user_id comment.user.id
    json.avatar comment.user.avatar.url
  end
end
