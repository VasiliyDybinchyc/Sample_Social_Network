class RelationshipsController < ApplicationController
  before_action :logged_in_user

  skip_before_action :verify_authenticity_token

  def create
    user = User.find(params[:friendId])
    @test = current_user.follow(user)
    render json: @test.to_json
  end

  def destroy
    user = User.find(params[:id])
    @test = current_user.unfollow(user)
    render json: @test.to_json
  end

  def get_friends
    @user = User.find(params[:id])
    @user_frends = @user.following.limit(10).shuffle
    render json: @user_frends.to_json
  end

  def get_all_friends
    @user = User.find(params[:id])
    @user_frends = @user.following
    render json: @user_frends.to_json
  end

  def check_is_this_user_is_friend
    user = User.find(params[:id])
    render json: current_user.following?(user).to_json
  end
end
