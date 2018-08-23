class CreateExperiences < ActiveRecord::Migration[5.2]
  def change
    create_table :experiences do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :date
      t.text :relevant_info
      t.integer :trip_id

      t.timestamps
    end
  end
end
