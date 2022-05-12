class CreateTokens < ActiveRecord::Migration[6.1]
  def change
    create_table :tokens do |t|
      t.string :name
      t.string :symbol
      t.string :api_identifier

      t.timestamps
    end
  end
end
