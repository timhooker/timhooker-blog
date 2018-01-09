require 'json'

namespace :ghost_migration do
  task import_posts: :environment do
    db_export = File.read('./db/export/tim-hooker-developer.ghost.2018-01-08.json')
    db = JSON.parse(db_export)
    posts = db['db'].first['data']['posts']
    posts.each do |post|
      post = {
        title: post['title'],
        html: post['html'],
        published_at: post['published_at'],
        markdown: post['markdown'],
        status: post['status'],
        slug: post['slug']
      }
      Post.new(post).save! #unless Post.where(:title, post['title'])
    end
  end
end
