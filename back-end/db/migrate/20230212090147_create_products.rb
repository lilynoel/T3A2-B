class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.float :price
      t.string :url
      t.text :ingredients

      t.timestamps
    end
  end
end
