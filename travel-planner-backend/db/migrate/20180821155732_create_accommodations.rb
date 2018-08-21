class CreateAccommodations < ActiveRecord::Migration[5.2]
  def change
    create_table :accommodations do |t|
      t.string :address
      t.string :city
      t.date :start_date
      t.date :end_date
      t.text :relevant_info
      t.integer :trip_id

      t.timestamps
    end
  end
end
