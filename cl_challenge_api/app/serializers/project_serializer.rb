class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :started, :folder_id, :cost, :display_topics

  belongs_to :folder, optional: true
end
