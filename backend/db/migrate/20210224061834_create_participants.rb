class CreateParticipants < ActiveRecord::Migration[6.0]
  def change
    create_table :participants do |t|
      t.string :full_name
      t.string :email
      t.integer :phone_number
      t.references :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
