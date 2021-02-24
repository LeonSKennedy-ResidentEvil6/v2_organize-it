class ParticipantsController < ApplicationController

    def index
      participants = Participant.all
      render json: ParticipantSerializer.new(participants)
    end

    def create
      participant = Participant.create(participant_params)
      if participant.save
        render json: ParticipantSerializer.new(participant), status: :accepted
      else
        render json: {errors: participant.errors.full_messages}, status: :unprocessible_entity
      end
    end

    def show
      participant = Participant.find_by(id: params[:id])
      render json: ParticipantSerializer.new(participant)
    end

    def destroy
      participant = Participant.find_by(id: params[:id])
      participant.destroy
    end

    private

    def participant_params
        params.require(:participant).permit(:full_name, :email, :phone_number, :event_id)
    end 
end
