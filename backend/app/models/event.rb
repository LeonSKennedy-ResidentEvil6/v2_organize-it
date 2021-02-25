class Event < ApplicationRecord
    has_many :participants, dependent: :destroy
end
