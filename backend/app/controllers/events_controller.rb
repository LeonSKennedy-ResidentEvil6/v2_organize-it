class EventsController < ApplicationController

    def index
      events = Event.all
      render json: EventSerializer.new(events)
    end

    def create
      # binding.pry
      event = Event.new(event_params)
      if event.save
        render json: EventSerializer.new(event), status: :accepted
      else
        render json: {errors: course.errors.full_message}, status: :unprocessible_entity
      end 
    end

    def show
      event = Event.find_by(id: params[:id])
      render json: EventSerializer.new(event)
    end

    def destroy
      event = Event.find_by(id: params[:id])
      event.destroy
    end 

    private

    def event_params
      params.require(:event).permit(:name, :description)
    end 
end
