class AddPicurlToTodo < ActiveRecord::Migration[5.2]
  def change
    add_column :todos, :picurl, :string
  end
end
