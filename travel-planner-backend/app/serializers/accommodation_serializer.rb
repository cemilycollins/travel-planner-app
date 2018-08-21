class AccommodationSerializer < ActiveModel::Serializer
  attributes :id, :address, :city, :start_date, :end_date, :relevant_info, :trip_id
end
