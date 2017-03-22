json.comment do
  json.id @comment.id
  json.body @comment.body
  json.username @comment.user.username
  json.avatar_url @comment.user.avatar.url
end
