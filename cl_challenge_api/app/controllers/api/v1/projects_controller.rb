class Api::V1::ProjectsController < ApplicationController
  def index
  	@projects = Project.order('started DESC')
  	render json: @projects
  end

  def show
  	render json: @project
  end

  private

  def project_params
  	params.permit(:title, :description, :started, :folder_id, :cost)
  end

  def find_project
  	@project = Project.find(params[:id])
  end
end
