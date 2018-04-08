class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.string :lName
      t.string :fName
      t.string :title
      t.string :email
      t.boolean :linkedIn
      t.boolean :firstLetter
      t.boolean :firstResponse
      t.boolean :secondLetter
      t.boolean :secondResponse
      t.boolean :thirdLetter
      t.boolean :thirdResponse
      t.string :notes
      t.string :interview
      t.references :company, foreign_key: true

      t.timestamps
    end
  end
end
