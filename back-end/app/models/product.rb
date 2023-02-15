class Product < ApplicationRecord
  validates :name, presence: true
  validates :url, presence: true 
  validates :price, presence: true
  has_many :orders
end