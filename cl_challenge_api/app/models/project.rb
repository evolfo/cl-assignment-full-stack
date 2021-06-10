class Project < ApplicationRecord
    belongs_to :folder, optional: true
    has_many :project_topics
    has_many :topics, through: :project_topics

    def display_topics
        topics.map do |topic|
            topic.title
        end
    end
end
