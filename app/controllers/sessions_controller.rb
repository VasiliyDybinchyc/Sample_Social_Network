class SessionsController < ApplicationController

  protect_from_forgery with: :exception

  skip_before_filter :verify_authenticity_token

  def create
    @user = User.find_by(email: user_params[:email].downcase)
    if @user && @user.authenticate(user_params[:password])
      log_in @user
      render json: @user.to_json
    else
      render json: @user.to_json
    end
  end

  def new
  end

  def destroy
    log_out if logged_in?
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
