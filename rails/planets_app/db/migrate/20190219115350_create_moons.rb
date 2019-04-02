class CreateMoons < ActiveRecord::Migration[5.2]
  def change
    create_table :moons do |t|
      t.text :name
      t.text :distance_from_planet
      t.text :radius
      t.text :orbit_period
      t.references :planet, foreign_key: true

      t.timestamps
    end
  end
end
