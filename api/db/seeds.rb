# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
posts = Post.create(
  [{
    title: 'Gulp Blew Ulp',
    body: "Ok, so your build broke. What now?

      Did you run npm install?
      When your stereo doesn't turn on, the first thing you wanna check is if it's plugged in. For all intents and purposes, gulp runs on its local dependencies. When you type npm install it will look for a file called package.json.
      Inside that file you'll see something like this"
  }, {
    title: 'Musicians (can) make great developers',
    body: "There are lots of us
    I used to play around quite a bit in a hip hop band.
    
    DISCLAIMER: I don't rap unless I'm trying to make people laugh.
    
    Moving on... I've seen the ins and outs of the bar music scene but I also have a BA in Music. So yeah, I have been an underemployed musician for many a year. What is unsurprising is that music doesn't pay the rent. Frankly, it just barely pays the Wendy's. What may be surprising is how many musicians code."
  }]
)