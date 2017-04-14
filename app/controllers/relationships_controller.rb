class RelationshipsController < ApplicationController

  def create
    user = User.find(params[:friendId])
    @relationships = current_user.follow(user)
  end

  def destroy
    user = User.find(params[:id])
    @relationships = current_user.unfollow(user)
  end

  def get_friends
    @user = User.find(params[:id])
    render json: @user.following.limit(10).shuffle
  end

  def get_all_friends
    @user = User.find(params[:id])
    render json: @user.following
  end

  def check_is_this_user_is_friend
    user = User.find(params[:id])
    render json: current_user.following?(user).to_json
  end
end
