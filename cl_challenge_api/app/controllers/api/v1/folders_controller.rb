class Api::V1::FoldersController < ApplicationController
  def index
  	@folders = Folder.order('started DESC')
  	render json: @folders
  end

  def show
  	render json: @folder
  end

  private

  def folder_params
  	params.permit(:title, :description, :started, :parent_folder_id)
  end

  def find_folder
  	@folder = Folder.find(params[:id])
  end
end
