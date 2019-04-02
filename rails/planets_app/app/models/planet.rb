class Planet < ApplicationRecord
    has_many :moons, dependent: :destroy
    validates :name, presence: true,
                      length: { minimum: 5 }
end
