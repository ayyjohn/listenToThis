class Api::TracksController < ApplicationController

  def create
    @track = Track.new(track_params)

    if @track.save
      render :detail_show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def show
    
  end

  def update

  end

  def destroy

  end

  def index
    # implement a filterability here?
  end

  private

  def track_params
    params.require(:track).permit(
    :name,
    :image_url,
    :release_date,
    :description,
    :genre,
    :user_id
    )
  end
end
