class TicketSerializer < ActiveModel::Serializer
  attributes :id, :type_of, :departure_location, :departure_date_time, :arrival_location, :arrival_date_time, :price, :relevant_info, :purchased, :trip_id
end
