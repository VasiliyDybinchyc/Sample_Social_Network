class MessagesController < ApplicationController
  include MessagesHelper

  def index
    @@stop = 29
    @@start = 0
    @user = User.find(params[:user_id])
    render json: @user.feed[0..@@stop].to_json
  end

  def takeMoreNews
    @@stop += 30
    @@start += 30
    @user = User.find(params[:user_id])
    render json: @user.feed[@@start..@@stop].to_json
  end

  def getFeedFriends
    @user = User.find(params[:user_id])

    feed_friends = Set.new []

    @user.feed[@@start..@@stop].each do |message|
      feed_friends.add(User.find(message.user_id))
    end

    render json: feed_friends
  end

  def create
    @message = current_user.messages.new(message_params)
    if link_youtube?(@message.content)
      @message.content = youtube_embed(@message.content)
    elsif @message.picture
      galerie = current_user.galleries.new(galerie_params)
      galerie.save
    end
    @message.save
    render json: @message.to_json
  end

  def destroy
    @message = Message.find(params[:user_id])
    @message.destroy
    redirect_to request.referrer || root_url
  end

  private

    def galerie_params
      params.require(:message).permit(:picture)
    end

    def message_params
      params.require(:message).permit(:content, :picture)
    end
end
