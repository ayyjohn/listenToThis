json.comment do
  json.id @comment.id
  json.body @comment.body
  json.username @comment.user.username
  json.user_id @comment.user.id
  json.avatar_url @comment.user.avatar.url
end
