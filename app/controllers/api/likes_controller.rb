class Api::LikesController < ApplicationController

  def show
    @like = Like.find(params[:id])
    render :show
  end

  def index
    @likes = Like.all
    render :index
  end

  def create
    @like = Like.new(like_params)

    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @likeable_id = @like.likeable_id
    @likeable_type = @like.likeable_type
    if @like.destroy
      render :destroy
    else
      render json: @like.errors.full_messages, status: 404
    end
  end
  
  private
  def like_params
    params.require(:like).permit(:liker_id, :likeable_id, :likeable_type)
  end

end