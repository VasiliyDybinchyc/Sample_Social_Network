class MessagesController < ApplicationController

  before_action :logged_in_user

  def create
    @message = current_user.messages.build(message_params)
    if @message.save
      redirect_to request.referrer || root_url
    else
      render root_path
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
