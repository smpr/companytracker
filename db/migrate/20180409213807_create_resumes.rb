class CreateResumes < ActiveRecord::Migration[5.1]
  def change
    create_table :resumes do |t|
      t.string :reqId
      t.string :title
      t.string :dateApplied
      t.string :rej
      t.string :contactName
      t.references :company, foreign_key: true

      t.timestamps
    end
  end
end
