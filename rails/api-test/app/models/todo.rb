class Todo < ApplicationRecord
    has_one_attached :picture
    has_many_attached :uploads
    has_many :images
    
end
