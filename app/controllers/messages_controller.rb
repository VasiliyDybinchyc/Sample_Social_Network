class MessagesController < ApplicationController

  before_action :logged_in_user

  skip_before_filter :verify_authenticity_token

  def create
    @message = current_user.messages.build(message_params)
    if @message.save
      redirect_to current_user
    else
      redirect_to root_url
    end
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
