class Api::CommentsController < ApplicationController

  class CommentsController < ApplicationController

    def create
      @comment = Comment.new(comment_params)

      if @comment.save
        render :show
      else
        render json: @comment.errors.full_messages, status: 422
      end

    end

    def index
      @comments = Comment.where("track_id = ?", params[:trackId])
      render :index
    end

    def destroy
      @comment = Comment.find_by_id(params[:id])
      @comment.delete
      render :show
    end

    private

    def comment_params
      params.require(:comment).permit(:body, :user_id, :track_id)
    end
  end

end
