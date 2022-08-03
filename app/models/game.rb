class Game < ApplicationRecord
    has_many :favorites
    has_many :users, through: :favorites
  
    validates :pgn, presence: true
end
