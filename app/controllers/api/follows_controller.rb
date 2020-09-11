class Api::FollowsController < ApplicationController

  def show
    @follow = Follow.find(params[:id])
    render :show
  end

  def index
    @follows = Follow.all
    render :index
  end

  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id  

    if @follow.save 
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find_by!(follower_id:current_user.id, followee_id:params[:id])

    @follow.destroy
    render :show
  end
  # def destroy
  #   @follow = Follow.find(params[:id])

  #   if @follow.destroy 
  #   else
  #     render json: @follow.errors.full_messages, status: 404
  #   end
  # end

private

  def follow_params
  params.require(:follow).permit(:followee_id, :follower_id)
  end
end