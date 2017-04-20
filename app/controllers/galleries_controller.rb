class GalleriesController < ApplicationController

  def getGallerey
    @user = User.find(params[:userId])
    if params[:pageNumber].to_i == 0
      @start = 0
      @stop = 7
    else
      @start = params[:pageNumber].to_i * 8 - 8
      @stop = params[:pageNumber].to_i * 8 - 1
    end
    @galerie = @user.galleries[@start..@stop]
    @galerie.push(@user.galleries.length)
    render json: @galerie
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
