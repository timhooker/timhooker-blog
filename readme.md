# BLOG 
This is meant to be both my blog and a portfolio piece of sorts and allow me some more flexibility in how I administer my blog.

## Tech Stack
The back end of this site is Rails 5 setup in api mode.
To get started you should ideally be on Ruby 2.4.1:
`bundle install`
`rails s`

The static front end is built in create react app with the typescript build being used. If state becomes complicated Redux will be implement but for now, there's no need.

Node version 9.3.0
`yarn install`
`yarn start`

The intention is to move this into docker to avoid version managers and create ease of deploy.

## Users
Right now the plan is just to seed in a single user, using the command line.

## Authentication
JWT delivered from rails and served to a static js front end. 

## Design
Initially I'm just scraping style ideas from a great theme from the Ghost blogging platform Casper. I'm use it as a sort of wireframe.

https://github.com/TryGhost/Casper
