class Api::V1::NotesController < ApplicationController

    def index
      notes = Note.all
      render json: notes, status: :accepted
    end

    def show
      note = Note.find(params[:id])
      render json: note, status: :accepted
    end 

    def create
      note = Note.create(note_params)
      render json: note, status: :accepted
    end 

    def update
      note = Note.find(params[:id])
      note.update(note_params)
      render json: note, status: :accepted
    end

    def destroy
        note = Note.find(params[:id])
        note.delete
        render json: { noteId: note.id}
    end

    private
    
    def note_params
      params.require(:note).permit(:body)
    end 

end
