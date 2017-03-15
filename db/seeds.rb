# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create(username: "guest", password: "password", location: "New York, NY", bio: "I love life and music.")
User.create(username: "ayyjohn", password: "password", location: "San Francisco, CA", bio: "My inspirations include Kanye West and Kanye West.")
User.create(username: "barkbark", password: "password", location: "San Luis Obispo, CA", bio: "I like sadder music. Slow stuff helps me concentrate.")
User.create(username: "warriorprincess", password: "password", location: "San Diego, CA", bio: "I really only like oldies, new music is bad!")
User.create(username: "thedykm", password: "password", location: "Seattle, WA", bio: "I can vibe to whatever, but let's be real, the less people who've heard of it the cooler it is.")
User.create(username: "ridersofrray", password: "password", location: "Seattle, WA", bio: "When I find a song I like I play it for two weeks until I'm sick of it. I can't help it.")
User.create(username: "ridethebus", password: "password", location: "San Francisco, CA", bio: "I like trance mixes. They help me stay up through the night working.")
User.create(username: "strozzapreti", password: "password", location: "Montreal, Canada", bio: "I like funk and rhythm stuff, but I have a keen ear for jazz too. I've been known to enjoy a really deep rap song or two.")
