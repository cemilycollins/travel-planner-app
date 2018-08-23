class TicketsController < ApplicationController

  before_action :find_ticket, only: [:show, :update, :destroy]

  def index
    render json: Ticket.all
  end

  def create
    render json: Ticket.create(ticket_params)
  end

  def show
    render json: @ticket
  end

  def update
    @ticket.update(ticket_params)
    if @ticket.save
      render json: @ticket, status: :accepted
    else
      render json: { errors: @ticket.errors.full_messages }, status: :unprocessible_entity
    end
  end

  def destroy
    render json: @ticket.destroy
  end

  private

  def find_ticket
    @ticket = Ticket.find(params[:id])
  end

  def ticket_params
    params.permit(:type_of, :departure_date_time, :departure_location, :arrival_date_time, :arrival_location, :price, :relevant_info, :purchased, :trip_id)
  end
end
