class Company < ApplicationRecord
    has_many :contacts, dependent: :destroy
    has_many :resumes, dependent: :destroy
end
