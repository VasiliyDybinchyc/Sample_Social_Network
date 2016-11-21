class UsersController < ApplicationController

  before_action :logged_in_user,          except: [:new, :create, :index]
  before_action :correct_user,            only: [:edit, :update]


  skip_before_filter :verify_authenticity_token, only: [:create, :update]

  def index
    @user = current_user
    if logged_in?
      @user_frends = @user.following.limit(10).shuffle
      @feed_items = @user.feed
      @user_current_user = current_user?(@user)
      @current_user_folowing = current_user.following?(@user)
      render component: "UserPage", props: { user:          @user,
                                             user_frends:   @user_frends,
                                             feed_items:    @feed_items,
                                             current_user:  @user_current_user,
                                             folowing:      @current_user_folowing}
    else
    render component: "index"
    end
  end

  def new
    @user = User.new
    render component: "SignUp"
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in @user
      @user_frends = @user.following.limit(10).shuffle
      @feed_items = @user.feed
      @user_current_user = current_user?(@user)
      @current_user_folowing = current_user.following?(@user)
      render component: "UserPage", props: { user:          @user,
                                             user_frends:   @user_frends,
                                             feed_items:    @feed_items,
                                             current_user:  @user_current_user,
                                             folowing:      @current_user_folowing}
    else
      render component: "SignUp"
    end
  end

  def edit
    @user = User.find(params[:id])
    render component: "EditUser", props: { user: @user}
  end

  def update
    @user = current_user
    @user_frends = @user.following.limit(10).shuffle
    @feed_items = @user.feed
    @user_current_user = current_user?(@user)
    @current_user_folowing = current_user.following?(@user)
    if @user.update_attributes(edit_user_params)
      render component: "UserPage", props: { user:          @user,
                                             user_frends:   @user_frends,
                                             feed_items:    @feed_items,
                                             current_user:  @user_current_user,
                                             folowing:      @current_user_folowing}
    else
      render component: "EditUser"
    end
  end

  def show
    @user = User.find(params[:id])
    @user_frends = @user.following.limit(10).shuffle
    @feed_items = @user.feed
    @user_current_user = current_user?(@user)
    @current_user_folowing = current_user.following?(@user)
    render component: "UserPage", props: { user:          @user,
                                           user_frends:   @user_frends,
                                           feed_items:    @feed_items,
                                           current_user:  @user_current_user,
                                           folowing:      @current_user_folowing}
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
