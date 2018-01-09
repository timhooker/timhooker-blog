class AddFieldsToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column(:posts, :html, :string)
    add_column(:posts, :status, :string)
    add_column(:posts, :slug, :string)
    rename_column(:posts, :body, :markdown)
  end
end
