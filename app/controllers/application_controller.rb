class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include SessionsHelper

  def shit
    render :file => 'layouts/application', :layout => false
  end


  private

    def logged_in_user
       unless logged_in?
         redirect_to root_path
       end
     end
end
