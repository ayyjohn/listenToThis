# Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, unique, index
password_digest | string    | not null
email           | string    | not null, unique, index
session_token   | string    | not null, unique, index
location        | string    |
bio             | text      |
image_url       | string    |

**Associations**

has_many:
* tracks
* comments


## tracks
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
image_url       | string    |
release_date    | date      | not null
description     | text      |
genre           | string    | not null
user_id         | integer   | not null, foreign key: users, index

**Associations**

belongs_to:
* user

has_many:
* comments

## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
body            | text      | not null
track_id        | integer   | not null, foreign key: tracks, index
user_id         | integer   | not null, foreign key: users, index

**Associations**

belongs_to:
* user
* track
