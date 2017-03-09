class UsersController < ApplicationController

  protect_from_forgery with: :exception

  skip_before_filter :verify_authenticity_token, only: [:create, :update]

  def index
    @users = User.all
    render json: @users.to_json
  end

  def show

    render json: User.find(params[:id]).to_json
  end

  def create
    @user = User.create(user_params)
    if @user.save
      log_in @user
      render json: @user.to_json
    else
      p @user.errors.full_messages
      render json: @user.to_json
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render json: @user.to_json
    else
      render json: @user.to_json
    end
  end

  def authentication
    @user =! current_user.blank?
    render json: @user.to_json
  end

  def getCurrentUser
    render json: current_user.to_json
  end

  def get_only_user_message
    @message = User.find(params[:id]).messages
    render json: @message.to_json
  end

  private

   def user_params
     params.require(:user).permit(:first_name,:last_name, :email, :password,
                                  :password_confirmation, :avatar, :croppersAvatar)
   end

   def edit_user_params
     params.require(:user).permit(:first_name,:last_name, :email, :password,
                                  :password_confirmation, :phone_number,
                                  :favorite_book, :favorite_film, :avatar, :croppersAvatar)
   end

    def correct_user
      @user = User.find(params[:id])
      redirect_to(root_url) unless current_user?(@user)
    end
end
