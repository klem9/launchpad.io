class User < ApplicationRecord
    has_secure_password
    has_many :portfolios

    validates :username, presence: true, uniqueness: true 
end
