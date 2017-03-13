# API Endpoints

## HTML

### Root
* `GET /` - Load app (render splash page)

## JSON

### Users

* `GET /api/users/:id` - view a user's page
* `POST /api/users` - create an account
* `PATCH /api/users/:id` - edit your account info

### Session

* `POST /api/session` - log in
* `DELETE /api/session` - log out

### Tracks

* `GET /api/tracks` - View all tracks (matching search query)
* `GET /api/users/:id/tracks` - View all tracks for a user
* `POST /api/tracks` - upload a new track
* `PATCH /api/tracks/:id` - edit a track's info
* `DELETE /api/tracks/:id` - delete a track

### Comments
* `GET /api/tracks/:id/comments` - get all comments for a track
* `POST /api/tracks/comments` - create comment
* `DELETE /api/comments/:id` - delete comment
