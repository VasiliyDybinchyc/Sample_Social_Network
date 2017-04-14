class ApplicationController < ActionController::Base

  before_action :configure_permitted_parameters, if: :devise_controller?

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

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :avatar, :croppersAvatar])
    devise_parameter_sanitizer.permit(:account_update, keys: [:first_name, :last_name])
  end
end
