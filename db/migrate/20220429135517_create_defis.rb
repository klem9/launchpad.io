class CreateDefis < ActiveRecord::Migration[6.1]
  def change
    create_table :defis do |t|
      t.string :name
      t.string :provider
      t.string :token
      t.string :apy

      t.timestamps
    end
  end
end
