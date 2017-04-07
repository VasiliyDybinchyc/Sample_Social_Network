class SessionsController < ApplicationController

  protect_from_forgery with: :exception

  skip_before_filter :verify_authenticity_token

  def authentication
    @user =! current_user.blank?
    render json: @user.to_json
  end

  def create
    @user = User.find_by(email: user_params[:email].downcase)
    if @user && @user.authenticate(user_params[:password])
      log_in @user
      render json: @user
    else
      render json: ['Email or password incorrect']
    end
  end

  def destroy
    log_out if logged_in?
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
