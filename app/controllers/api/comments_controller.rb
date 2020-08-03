class Api::CommentsController < ApplicationController

  def show
    @comment = Comment.find(params[:id])
    render :show
  end

  def index
    @comments = Comment.all
    render :index
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])

    if @comment.destroy
    else
      render json: @comment.errors.full_messages, status: 404
    end
  end
  
  private
  def comment_params
    params.require(:comment).permit(:id, :body, :video_id, :author_id)
    # , :parent_id
  end

end