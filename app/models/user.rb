class User < ApplicationRecord
    has_many :favorites
    has_many :games, through: :favorites
  
    has_secure_password
  
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
end
