class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :name
      t.references :todo, foreign_key: true

      t.timestamps
    end
    add_index :images, :name
  end
end
