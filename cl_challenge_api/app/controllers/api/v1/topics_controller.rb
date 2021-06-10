class Api::V1::TopicsController < ApplicationController
  def index
  	@topics = Topic.all
  	render json: @topics
  end

  def show
  	render json: @topic
  end

  private

  def topic_params
  	params.permit(:title)
  end

  def find_topic
  	@topic = Topic.find(params[:id])
  end
end
