# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
u1 = User.create!(username: "guest",
  password: "password",
  location: "New York, NY",
  bio: "I love life and music.")
u2 = User.create!(username: "ayyjohn",
  password: "password",
  location: "San Francisco, CA",
  bio: "My inspirations include Kanye West and Kanye West.")
u3 = User.create!(username: "barkbark",
  password: "password",
  location: "San Luis Obispo, CA",
  bio: "I like sadder music. Slow stuff helps me concentrate.")
u4 = User.create!(username: "warriorprincess",
  password: "password",
  location: "San Diego, CA",
  bio: "I really only like oldies, new music is bad!")
u5 = User.create!(username: "thedykm",
  password: "password",
  location: "Seattle, WA",
  bio: "I can vibe to whatever, but let's be real, the less people who've heard of it the cooler it is.")
u6 = User.create!(username: "ridersofrray",
  password: "password",
  location: "Seattle, WA",
  bio: "When I find a song I like I play it for two weeks until I'm sick of it. I can't help it.")
u7 = User.create!(username: "ridethebus",
  password: "password",
  location: "San Francisco, CA",
  bio: "I like trance mixes. They help me stay up through the night working.")
u8 = User.create!(username: "strozzapreti",
  password: "password",
  location: "Montreal, Canada",
  bio: "I like funk and rhythm stuff, but I have a keen ear for jazz too. I've been known to enjoy a really deep rap song or two.")

Track.destroy_all
t1 = Track.create!(title: "LUV",
  release_date: "2016/06/18",
  genre: "Trance",
  user_id: u1.id,
  description: "Sit back and enjoy the cool relaxing melodies of my Giraffage. Let your mind float away",
  album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/comfort.jpg",
  mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/Giraffage+-+LUV.mp3")
t3 = Track.create!(title: "Planet",
  release_date: "2016/06/18",
  genre: "Electronica",
  user_id: u1.id,
  album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/endless_fantasy.jpg",
  mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/Anamanaguchi+-+Planet.mp3")
t5 = Track.create!(title: "Skinny Love",
  release_date: "2016/06/18",
  genre: "Soft Rock",
  user_id: u1.id,
  album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/for_emma_forever_ago.jpg",
  mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/Bon+Iver+-+Skinny+Love.mp3")
t4 = Track.create!(title: "Mr. Brightside",
  release_date: "2016/06/18",
  genre: "Rock",
  user_id: u1.id,
  album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/hot_fuss.png",
  mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/The+Killers+-+Mr.+Brightside.mp3")
