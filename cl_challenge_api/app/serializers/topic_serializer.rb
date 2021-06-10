class TopicSerializer < ActiveModel::Serializer
  attributes :id, :title

  has_many :project_topics
  has_many :projects, through: :project_topics
end
