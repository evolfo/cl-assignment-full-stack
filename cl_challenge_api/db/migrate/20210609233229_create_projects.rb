class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :description
      t.date :started
      t.integer :folder_id
      t.string :cost

      t.timestamps
    end
  end
end
