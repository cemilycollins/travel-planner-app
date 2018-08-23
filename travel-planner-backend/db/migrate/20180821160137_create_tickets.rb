class CreateTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :tickets do |t|
      t.string :type_of
      t.string :departure_date_time
      t.string :departure_location
      t.string :arrival_date_time
      t.string :arrival_location
      t.float :price
      t.text :relevant_info
      t.boolean :purchased
      t.integer :trip_id

      t.timestamps
    end
  end
end
