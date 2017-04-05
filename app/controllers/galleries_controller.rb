class GalleriesController < ApplicationController

  skip_before_filter :verify_authenticity_token, only: [:create]

  def index
    @user = User.find(params[:user_id])
    @galerie = @user.galleries
    render json: @galerie.to_json
  end

  def create
    @galerie = current_user.galleries.new(galerie_params)
    @galerie.save
    render json: @galerie.to_json
  end

  def destroy
    @galerie = Galerie.find(params[:id])
    @galerie.destroy
  end

  private

    def galerie_params
      params.require(:gallery).permit(:picture)
    end
end
