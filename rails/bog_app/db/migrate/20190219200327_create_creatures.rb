class CreateCreatures < ActiveRecord::Migration[5.2]
  def change
    create_table :creatures do |t|
      t.text :name
      t.text :description

      t.timestamps
    end
  end
end
