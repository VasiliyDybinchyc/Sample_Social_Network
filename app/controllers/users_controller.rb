class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users.to_json
  end

  def show
    if logged_in?
      if params[:id].to_i == current_user.id
        redirect_to '/profile'
      else
        render :file => 'layouts/application'
      end
    else
      redirect_to root_path
    end
  end

  def authentication
    if current_user.blank?
      render json: false.to_json
    else
      render json: current_user.to_json
    end
  end

  def getCurrentUser
    render json: current_user.to_json
  end

  def giveUser
    render json: User.find(params[:id]).to_json
  end

  private

   def user_params
     params.require(:user).permit(:first_name,:last_name, :email, :password,
                                  :password_confirmation, :avatar, :croppersAvatar)
   end

    def correct_user
      @user = User.find(params[:id])
      redirect_to(root_url) unless current_user?(@user)
    end
end
