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
      if note.id != 'null'
        note.update(note_params)
        render json: note, status: :accepted
      else
        redirect_back(fallback_location: root_path)
      end
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
