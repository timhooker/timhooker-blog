module Api::V1
  class PostsController < ApplicationController
    def index
      @posts = sanitize_collection(Post.all)
      render json: @posts
    end

    private

    def post_params(post)
      post.require(:post).permit(:title, :body, :published_date)
    end

    def sanitize_collection(posts)
      posts.map do |post|
        {
          id: post.id,
          title: post.title,
          markdown: post.markdown,
          html: post.html,
          published_date: post.published_at,
          tags: post.tags.map(&:name)
        }
      end
    end
  end
end