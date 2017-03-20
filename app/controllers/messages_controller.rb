class MessagesController < ApplicationController
  include MessagesHelper

  skip_before_filter :verify_authenticity_token, only: [:create]

  def index
    @@stop = 29

    @user = User.find(params[:user_id])
    @posts = @user.feed[0..@@stop]
    render json: @posts.to_json
  end

  def takeMoreNews
    @@stop += 30

    @user = User.find(params[:user_id])
    @posts = @user.feed[0..@@stop]
    render json: @posts.to_json
  end

  def create
    @message = current_user.messages.new(message_params)
    if link_youtube?(@message.content)
      @message.content = youtube_embed(@message.content)
    end
    @message.save
  end

  def destroy
    @message = Message.find(params[:id])
    @message.destroy
    redirect_to request.referrer || root_url
  end

  private

    def message_params
      params.require(:message).permit(:content, :picture)
    end
end
