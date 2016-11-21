class SessionsController < ApplicationController

  skip_before_filter :verify_authenticity_token, only: [:create]

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    @user = user
    @user_frends = @user.following.limit(10).order("RANDOM()")
    @feed_items = @user.feed
    if user && user.authenticate(params[:session][:password])
      log_in user
      params[:session][:remember_me] == '1' ? remember(user) : forget(user)
      render component: "UserPage", props: { user: @user,
                                             user_frends: @user_frends,
                                             feed_items: @feed_items}
    else
      flash.now[:danger] = 'Invalid email/password combination'
      render component: "LogIn"
    end
  end

  def new
    render component: "LogIn"
  end

  def destroy
    log_out if logged_in?
    redirect_to root_url
  end
end
