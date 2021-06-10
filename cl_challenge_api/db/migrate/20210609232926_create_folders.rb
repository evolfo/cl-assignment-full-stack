class CreateFolders < ActiveRecord::Migration[6.1]
  def change
    create_table :folders do |t|
      t.string :title
      t.string :description
      t.date :started

      t.references :parent_folder, foreign_key: { to_table: :folders }

      t.timestamps
    end
  end
end
