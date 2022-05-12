class Portfolio < ApplicationRecord
  belongs_to :user
  has_many :tokens 
  has_many :defis
end
