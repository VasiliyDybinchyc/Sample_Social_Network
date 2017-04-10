class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include SessionsHelper

  def root
    if logged_in?
      redirect_to "/profile"
    else
      shit
    end
  end

  def checkLogined
    if logged_in?
      shit
    else
      redirect_to root_path
    end
  end

  def shit
    render :file => 'layouts/application'
  end


  private

    def logged_in_user
       unless logged_in?
         redirect_to root_path
       end
     end
end
