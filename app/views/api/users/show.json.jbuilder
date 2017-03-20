json.extract! @user,
             :username,
             :location,
             :bio,
             :id
json.avatar_url @user.avatar.url
