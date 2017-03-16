class Api::TracksController < ApplicationController

  def create
    @track = Track.new(track_params)

    if @track.save
      render :show
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
    # @tracks = Track.find_by_sql()
    search_query = params[:searchParam]
    search_query = "%" + search_query + "%"
    @tracks = Track.where("name LIKE ?", search_query)
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
