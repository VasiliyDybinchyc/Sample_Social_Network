class UsersController < ApplicationController

  before_action :logged_in_user, except: [:new, :create, :index]
  before_action :correct_user,   only: [:edit, :update]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in @user
      redirect_to @user
    else
      render 'new'
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(edit_user_params)
      redirect_to @user
    else
      render 'edit'
    end
  end

  def show
    @user = User.find(params[:id])
    @user_frends = @user.following
    @message  = current_user.messages.build
    @user_messages = @user.messages
    @feed_items = @user.feed
  end

  private

   def user_params
     params.require(:user).permit(:first_name,:last_name, :email, :password,
                                  :password_confirmation, :avatar)
   end

   def edit_user_params
     params.require(:user).permit(:first_name,:last_name, :email, :password,
                                  :password_confirmation, :phone_number,
                                  :favorite_book, :favorite_film, :avatar)
   end

    def correct_user
      @user = User.find(params[:id])
      redirect_to(root_url) unless current_user?(@user)
    end
end
