class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken

  before_action :get_current_user

  # def authenticate_current_user
  #   head :unauthorized if get_current_user.nil?
  # end

  def root
    if user_signed_in?
      redirect_to "/profile"
    else
      shit
    end
  end

  def checkLogined
    if user_signed_in?
      shit
    else
      redirect_to root_path
    end
  end

  def shit
    render :file => 'layouts/application'
  end

  private
    def get_current_user
      return nil unless cookies[:authHeaders]
      authHeaders = JSON.parse(cookies[:authHeaders])

      expiration_datetime = DateTime.strptime(authHeaders["expiry"], "%s")
      current_user = User.find_by(uid: authHeaders["uid"])

      if current_user &&
         current_user.tokens.has_key?(authHeaders["client"]) &&
         expiration_datetime > DateTime.now

        @current_user = current_user
      end
    @current_user
  end
end
