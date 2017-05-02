# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170501173601) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "track_id"
    t.text     "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["track_id"], name: "index_comments_on_track_id", using: :btree
    t.index ["user_id"], name: "index_comments_on_user_id", using: :btree
  end

  create_table "tracks", force: :cascade do |t|
    t.string   "title",                      null: false
    t.date     "release_date",               null: false
    t.text     "description"
    t.string   "genre",                      null: false
    t.string   "user_id",                    null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.string   "album_artwork_file_name"
    t.string   "album_artwork_content_type"
    t.integer  "album_artwork_file_size"
    t.datetime "album_artwork_updated_at"
    t.string   "mp3_file_file_name"
    t.string   "mp3_file_content_type"
    t.integer  "mp3_file_file_size"
    t.datetime "mp3_file_updated_at"
    t.string   "waveform_file_name"
    t.string   "waveform_content_type"
    t.integer  "waveform_file_size"
    t.datetime "waveform_updated_at"
    t.index ["genre"], name: "index_tracks_on_genre", using: :btree
    t.index ["title"], name: "index_tracks_on_title", using: :btree
    t.index ["user_id"], name: "index_tracks_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",            null: false
    t.string   "password_digest",     null: false
    t.string   "session_token",       null: false
    t.string   "location"
    t.text     "bio"
    t.string   "image_url"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
