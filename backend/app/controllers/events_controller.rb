class EventsController < ApplicationController

    def index
      events = Event.all
      render json: EventSerializer.new(events)
    end

    def create
      event = Event.new(event_params)
      if event.save
        render json: EventSerializer.new(event), status: :accepted
      else
        render json: { error: event.errors.full_message }, status: :unprocessible_entity
      end
    end

    def show
      event = Event.find_by(id: params[:id])
      render json: EventSerializer.new(event)
    end

    def destroy
      event = Event.find_by(id: param[:id])
      event.destroy
    end 

    private

    # def get_event
    #    event = Event.find_by(id: params[:id])
    # end 

    def event_params
        params.requrie(:event).permit(:name, :description)
    end 
end
