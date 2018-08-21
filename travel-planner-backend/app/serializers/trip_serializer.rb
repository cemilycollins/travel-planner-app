class TripSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :name, :img_url
  has_many :experiences
  has_many :accommodations
  has_many :tickets
end
