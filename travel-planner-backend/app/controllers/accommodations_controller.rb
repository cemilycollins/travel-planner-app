class AccommodationsController < ApplicationController

  before_action :find_accommodation, only: [:show, :update, :destroy]

  def index
    render json: Accommodation.all
  end

  def create
    render json: Accommodation.create(accommodation_params)
  end

  def show
    render json: @accommodation
  end

  def update
    @accommodation.update(accommodation_params)
    if @accommodation.save
      render json: @accommodation, status: :accepted
    else
      render json: { errors: @accommodation.errors.full_messages }, status: :unprocessible_entity
    end
  end

  def destroy
    render json: @accommodation.destroy
  end

  private

  def find_accommodation
    @accommodation = Accommodation.find(params[:id])
  end

  def accommodation_params
    params.permit(:address, :city, :start_date, :end_date, :relevant_info, :trip_id, :accommodation)
  end
end
