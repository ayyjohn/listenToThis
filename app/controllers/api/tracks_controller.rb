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
    @track = Track.find_by_id(params[:id])

    if @track
      render :show
    else
      render json: ["that track does not exist"], status: 404
    end

  end

  def update
    @track = Track.find_by_id(params[:id])

    if @track.update(track_params)
      render :show
    else
      render @track.errors.full_messages, status: 422
    end
  end

  def destroy
    @track = Track.find_by_id(params[:id])
    @track.delete
    render :show
  end

  def index
    # implement a filterability here?
    # @tracks = Track.find_by_sql()
    search_query = params[:searchParam]
    search_query = "%" + search_query + "%"
    @tracks = Track.where("title ILIKE ? OR genre ILIKE ?", search_query, search_query).limit(10).order('created_at DESC')
    render :index
  end

  private

  def track_params
    params.require(:track).permit(
    :title,
    :album_artwork,
    :mp3_file,
    :release_date,
    :description,
    :genre,
    :user_id
    )
  end

end
