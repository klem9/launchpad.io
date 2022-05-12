class CreatePortfolios < ActiveRecord::Migration[6.1]
  def change
    create_table :portfolios do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :token_id
      t.string :defi_id
      t.string :investment_type
      t.float :amount 

      t.timestamps
    end
  end
end
