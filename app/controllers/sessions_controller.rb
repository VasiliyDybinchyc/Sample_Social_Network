class SessionsController < ApplicationController

  def authentication
    @user =! current_user.blank?
    render json: @user.to_json
  end
end
