class ExperienceSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :date, :relevant_info, :trip_id
end
