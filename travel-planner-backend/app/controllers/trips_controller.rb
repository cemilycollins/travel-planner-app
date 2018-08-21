class TripsController < ApplicationController

  before_action :find_trip, only: [:show, :update, :destroy]

  def index
    render json: Trip.all
  end

  def show
    render json: @trip
  end

  def create
    render json: Trip.create(trip_params)
  end

  def update
    @trip.update(trip_params)
    if @trip.save
      render json: @trip, status: :accepted
    else
      render json: { errors: @trip.errors.full_messages }, status: :unprocessible_entity
    end
  end

  def destroy
    render json: @trip.destroy
  end

  private

  def find_trip
    @trip = Trip.find(params[:id])
  end

  def trip_params
    params.permit(:start_date, :end_date, :name, :img_url)
  end
end
