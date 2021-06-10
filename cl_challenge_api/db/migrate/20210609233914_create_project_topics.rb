class CreateProjectTopics < ActiveRecord::Migration[6.1]
  def change
    create_table :project_topics do |t|
      t.belongs_to :topic
      t.belongs_to :project
      t.timestamps
    end
  end
end
