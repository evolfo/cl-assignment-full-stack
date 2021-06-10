class Folder < ApplicationRecord
    has_many :projects
    has_many :nested_folders, class_name: "Folder", foreign_key: "nested_folder_id"

    belongs_to :parent_folder, class_name: "Folder", optional: true
end
