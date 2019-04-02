class AddPicurlsToTodo < ActiveRecord::Migration[5.2]
  def change
    add_column :todos, :picurlabc, :text
  end
end
