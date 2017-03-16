class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password])

    if @user
      log_in!(@user)
      render "api/users/current_user_show"
    else
      render json: ["invalid username/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      log_out!
      render json: {}
    else
      render json: ["nobody signed in"], status: 404
    end
  end

  private

  def session_params
    params.require(:user).permit(:username, :password)
  end
end
