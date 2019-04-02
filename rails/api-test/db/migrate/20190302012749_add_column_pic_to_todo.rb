class AddColumnPicToTodo < ActiveRecord::Migration[5.2]
  def change
    add_column :todos, :pic, :string
  end
end
