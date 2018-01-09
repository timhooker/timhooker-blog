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
        %w[id title markdown status published_at tags].reduce({}) do |post_item, key|
          post_item[key] = post[key]
          post_item
        end
      end
    end
  end
end