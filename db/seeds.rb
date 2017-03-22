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
  bio: "I love life and music.",
  avatar: "https://s3-us-west-1.amazonaws.com/listentothis-dev/no_user.jpg")
u2 = User.create!(username: "ayyjohn",
  password: "password",
  location: "San Francisco, CA",
  bio: "My inspirations include Kanye West and Kanye West.",
  avatar: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_user_avatars/ayyjohn.jpg")
u3 = User.create!(username: "barkbark",
  password: "password",
  location: "San Luis Obispo, CA",
  bio: "I like sadder music. Slow stuff helps me concentrate.",
  avatar: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_user_avatars/autumn.jpg")
# u4 = User.create!(username: "warriorprincess",
#   password: "password",
#   location: "San Diego, CA",
#   bio: "I really only like oldies, new music is bad!",
#   avatar: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_user_avatars/xena.jpg")
# u5 = User.create!(username: "thedykm",
#   password: "password",
#   location: "Seattle, WA",
#   bio: "I can vibe to whatever, but let's be real, the less people who've heard of it the cooler it is.",
#   avatar: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_user_avatars/dylan.jpg")
# u6 = User.create!(username: "ridersofrray",
#   password: "password",
#   location: "Seattle, WA",
#   bio: "When I find a song I like I play it for two weeks until I'm sick of it. I can't help it.",
#   avatar: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_user_avatars/rohan.jpg")
# u7 = User.create!(username: "ridethebus",
#   password: "password",
#   location: "San Francisco, CA",
#   bio: "I like trance mixes. They help me stay up through the night working.",
#   avatar: "")
# u8 = User.create!(username: "strozzapreti",
#   password: "password",
#   location: "Montreal, Canada",
#   bio: "I like funk and rhythm stuff, but I have a keen ear for jazz too. I've been known to enjoy a really deep rap song or two.",
#   avatar: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_user_avatars/silas.jpg")
# u9 = User.create!(username: "swarlos",
#   password: "password",
#   location: "Sacramento, California",
#   bio: "Tonight Alive Tonight Alive Tonight Alive Tonight Alive",
#   avatar: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_user_avatars/carl.jpg")
# u10 = User.create!(username: "albahardcore",
#   password: "password",
#   location: "San Diego, California",
#   bio: "I play frisbee and I dress stylishly. Oh and I always sing along.",
#   avatar: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_user_avatars/alba.jpg")
#
Track.destroy_all
t1 = Track.create!(title: "LUV",
  release_date: "2016/06/18",
  genre: "Trance",
  user_id: u3.id,
  description: "Sit back and enjoy the cool relaxing melodies of my Giraffage. Let your mind float away",
  album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/comfort.jpg",
  mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/Giraffage+-+LUV.mp3")
# t3 = Track.create!(title: "Planet",
#   release_date: "2016/06/18",
#   genre: "Electronica",
#   user_id: u2.id,
#   description: "Anamanaguchi's high pitched techno combines with a smooth rhythm to produce a calming work song",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/endless_fantasy.jpg",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/Anamanaguchi+-+Planet.mp3")
# t4 = Track.create!(title: "Mr. Brightside",
#   release_date: "2016/06/18",
#   genre: "Rock",
#   user_id: u1.id,
#   description: "A classic introduction to The Killers, Mr. Brightside is the tale of a lovesick man in denial",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/hot_fuss.png",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/The+Killers+-+Mr.+Brightside.mp3")
# t5 = Track.create!(title: "Obama Victory Dance",
#   release_date: "2016/06/18",
#   genre: "Jazz",
#   user_id: u8.id,
#   description: "A little rhythm and jazz for the soul",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/bob_ya_head.jpg",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/01+-+Obama+Victory+Dance.mp3")
# t6 = Track.create!(title: "Rollercoaster",
#   release_date: "2016/06/18",
#   genre: "Pop",
#   user_id: u2.id,
#   description: "I deny you the capacity to not sing along. Bleachers knocked it out of the park on this one",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/strange_desire.jpg",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/01+-+Rollercoaster.mp3")
# t7 = Track.create!(title: "God Damn these Vampires",
#   release_date: "2016/06/18",
#   genre: "Soft Rock",
#   user_id: u2.id,
#   description: "Don't let all the biblical references turn you off them, The Mountain Goats soft rock is legendary",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/no_album.png",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/01+-+The+Mountain+Goats+-+Damn+These+Vampires.mp3")
# t8 = Track.create!(title: "Flowers in Your Hair",
#   release_date: "2016/06/18",
#   genre: "Pop",
#   user_id: u1.id,
#   description: "While Ho-Hey was their most famous song, this heartfelt b-track deserves more recognition",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/the_lumineers.jpg",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/01-Flowers+In+Your+Hair.mp3")
# t9 = Track.create!(title: "American Slang",
#   release_date: "2016/06/18",
#   genre: "Rock",
#   user_id: u5.id,
#   description: "I really feel like he should be saying 'I got your name tattoed inside of my thigh'",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/hot_fuss.png",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/01.+The+Gaslight+Anthem+-+American+Slang+-+American+Slang.mp3")
# t10 = Track.create!(title: "Coloris",
#   release_date: "2016/06/18",
#   genre: "Techno",
#   user_id: u6.id,
#   description: "The perfect song to get you amped up for a fight, or for a skydiving video",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/coloris.jpg",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/01.+coloris.mp3")
# t11 = Track.create!(title: "Welcome Home",
#   release_date: "2016/06/18",
#   genre: "Soft Rock",
#   user_id: u5.id,
#   description: "A soft, relaxing song that I honestly haven't figured out the meaning of but I love it",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/ghost.jpg",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/02+-+Welcome+Home.mp3")
# t12 = Track.create!(title: "Looking for the Perfect Beat",
#   release_date: "2016/06/18",
#   genre: "Rap",
#   user_id: u1.id,
#   description: "Take a tour through the roots of Rap with one of the originals, Afrika Bambaataa",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/planet_rock_the_album.jpg",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/02+Looking+For+The+Perfect+Beat+(Ori.mp3")
# t13 = Track.create!(title: "Scatman's World",
#   release_date: "2016/06/18",
#   genre: "Retro",
#   user_id: u1.id,
#   description: "One of the most unique styles of music, you probably know of this song but didn't know the name",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/scatmans_world.JPG",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/02+Scatman's+World.mp3")
# t14 = Track.create!(title: "Hurts like Heaven",
#   release_date: "2016/06/18",
#   genre: "Pop",
#   user_id: u2.id,
#   description: "In my opinion the best song from the album, I never could understand why Paradise was the top from MX",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/mylo_xyloto.jpg",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/02-coldplay-hurts_like_heaven.mp3")
# t16 = Track.create!(title: "Put 'em Up",
#   release_date: "2016/06/18",
#   genre: "Pop",
#   user_id: u1.id,
#   description: "Both catchy and empowering, Priory reminds you that it's okay to be who you are. I especially love
#   the references to sickness",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/need_to_know.jpg",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/02-priory-put_em_up.mp3")
# t17 = Track.create!(title: "Guitar Sound",
#   release_date: "2016/06/18",
#   genre: "Techno",
#   user_id: u1.id,
#   description: "Savant musician Ronald Jenkees will dissolve you into the couch with his smooth keyboard skills",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/disorganized_fun.png",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/03+-+Guitar+Sound.mp3")
# t18 = Track.create!(title: "Lend Me an Ear",
#   release_date: "2016/06/18",
#   genre: "Rap",
#   user_id: u2.id,
#   description: "Take a tour back to old-school rap with the clever lines of The D.O.C. Lend him an ear",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/no_one_can_do_it_better.jpg",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/03+-+The+D.O.C.+-+Lend+Me+An+Ear.mp3")
# t19 = Track.create!(title: "Dreaming",
#   release_date: "2016/06/18",
#   genre: "Pop",
#   user_id: u3.id,
#   description: "Try this track out if you like Walk The Moon or Bleachers, very similar sound",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/lovetap.jpg",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/03-smallpools-dreaming.mp3")
# t20 = Track.create!(title: "Ribs",
#   release_date: "2016/06/18",
#   genre: "Pop",
#   user_id: u3.id,
#   description: "A less popular song from a very widely known album, Lorde reminisces about her childhood",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/pure_heroine.jpg",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/04+-+Ribs.mp3")
# t21 = Track.create!(title: "Sure as Hell",
#   release_date: "2016/06/18",
#   genre: "Rock",
#   user_id: u9.id,
#   description: "For fans of Paramore there's Tonight Alive. The bands have very similar sounds and both have cute lead singers",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/what_are_you_so_scared_of.jpg",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/04+-+Sure+As+Hell.mp3")
# t22 = Track.create!(title: "Under the Tide",
#   release_date: "2016/06/18",
#   genre: "Pop",
#   user_id: u10.id,
#   description: "If all you know of CHVRCHES is The Mother We Share then you have some catching up to do",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/the_bones_of_what_you_believe.png",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/06+-+Under+The+Tide.mp3")
# t23 = Track.create!(title: "Swimming in the Flood",
#   release_date: "2016/06/18",
#   genre: "Pop",
#   user_id: u10.id,
#   description: "Manners may be one of the best albums of the decade. It's become so rare to find an album that you can listen
#   to all the way through, and this song is no exception. If you like high voiced singing give it a look",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/manners.jpg",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/06+Swimming+In+The+Flood.mp3")
# t24 = Track.create!(title: "Hide",
#   release_date: "2016/06/18",
#   genre: "Dubstep",
#   user_id: u1.id,
#   description: "If bass if your thing, just wait 'til it drops on this song",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/hide.jpg",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/1.+Hide+(Tropkillaz+Remix).mp3")
# t25 = Track.create!(title: "Everything I Am",
#   release_date: "2016/06/18",
#   genre: "Rap",
#   user_id: u2.id,
#   description: "Everyone knows Kanye west as this famous narcissist, I think there's more to him than that. Some of
#   his work is more heartfelt than people like to admit",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/graduation.jpg",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/10+-+Everything+I+Am+(feat.+DJ+Premier).mp3")
# t26 = Track.create!(title: "Ladder to the Sky",
#   release_date: "2016/06/18",
#   genre: "Techno",
#   user_id: u2.id,
#   description: "Niche techno artist Zircon provides relaxing upbeat and repetitive techno for studying or relaxing",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/antigravity.jpg",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/10+-+Ladder+to+the+Sky.mp3")
# t27 = Track.create!(title: "Take a Walk",
#   release_date: "2016/06/18",
#   genre: "Rap",
#   user_id: u8.id,
#   description: "Masta Ace takes you on a rap-tour of the streets, where things get all too real",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/disposable_arts.jpg",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/10+-+Take+A+Walk+(feat.+Apocalypse).mp3")
# t28 = Track.create!(title: "Traveling by Night",
#   release_date: "2016/06/18",
#   genre: "Pop",
#   user_id: u6.id,
#   description: "Sporadic sound bytes combine into a perfect mix of beat and tune in She Music",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/coloris.jpg",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/15.+traveling+by+night.mp3")
# t29 = Track.create!(title: "Make Your Own Kind of Music",
#   release_date: "2016/06/18",
#   genre: "Oldies",
#   user_id: u1.id,
#   description: "A reminder from one of the greats that you have to be you",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/make_your_own_kind_of_music.jpg",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/A1++Mama+Cass+Elliot+-+Make+Your+Own+Kind+Of+Music.mp3")
# t30 = Track.create!(title: "Live at 7-11",
#   release_date: "2016/06/18",
#   genre: "Techno",
#   user_id: u8.id,
#   description: "Mux Mool's unique style is quickly identifiable from his distorted techno",
#   album_artwork: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_album_artwork/planet_high_school.jpg",
#   mp3_file: "https://s3-us-west-1.amazonaws.com/listentothis-dev/seed_mp3s/2.+Live+at+7-11.mp3")
Comment.destroy_all
c1 = Comment.create!(body: "nice track",
  user_id: u1.id,
  track_id: t1.id)
c2 = Comment.create!(body: "nice track",
  user_id: u2.id,
  track_id: t1.id)
c3 = Comment.create!(body: "nice track",
  user_id: u3.id,
  track_id: t1.id)
