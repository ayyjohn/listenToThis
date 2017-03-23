class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      log_in!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by_id(params[:id])

    if @user
      render :show
    else
      render json: ["That user doesn't exist"], status: 404
    end
  end

  def update
    @user = User.find_by_id(params[:id])

    if @user.update(user_params)
      render :show
    else
      render @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :location, :avatar, :bio)
  end
end
