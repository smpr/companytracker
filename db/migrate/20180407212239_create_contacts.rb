class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.string :lName
      t.string :fName
      t.string :title
      t.string :email
      t.string :linkedIn
      t.string :firstLetter
      t.string :firstResponse
      t.string :secondLetter
      t.string :secondResponse
      t.string :thirdLetter
      t.string :thirdResponse
      t.string :notes
      t.string :interview
      t.references :company, foreign_key: true

      t.timestamps
    end
  end
end
