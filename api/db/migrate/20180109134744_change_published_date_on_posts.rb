class ChangePublishedDateOnPosts < ActiveRecord::Migration[5.1]
  def change
    rename_column(:posts, :published_date, :published_at)
  end
end
