class Company < ApplicationRecord
    has_many :contacts, dependent: :destroy
end
