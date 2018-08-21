class Trip < ApplicationRecord
  has_many :accommodations
  has_many :tickets
  has_many :experiences
end
