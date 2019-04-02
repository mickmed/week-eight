class CreatePlanets < ActiveRecord::Migration[5.2]
  def change
    create_table :planets do |t|
      t.text :name
      t.text :distance_from_sun
      t.text :diameter
      t.text :orbit_period

      t.timestamps
    end
  end
end
