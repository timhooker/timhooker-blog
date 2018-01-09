require 'json'

namespace :ghost_migration do
  task import_posts: :environment do
    db_export = File.read('./db/export/tim-hooker-developer.ghost.2018-01-08.json')
    db = JSON.parse(db_export)
    posts = db['db'].first['data']['posts']
    post_list = posts.map do |post|
      new_post = {}
      %w[id title markdown status].each do |key|
        new_post[key] = post[key]
      end
      if post['published_at']
        new_post[:published_at] = DateTime.strptime("#{post['published_at']}", '%Q')
      end
      Post.create(new_post)
    end
    puts "Saved #{post_list.length} posts"
  end
  task import_post_tags: :environment do
  end
end
