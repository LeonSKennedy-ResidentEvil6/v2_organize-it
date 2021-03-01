class Notes {
    constructor() {
        this.notes = []
        this.adapter = new NotesService()
        this.bindingsAndEventListeners() //instead of caching DOM, use this method to make code more efficient. how?
        this.fetchAndLoadNotes()
    }

    bindingsAndEventListeners() {
        this.notesContainer = document.querySelector("#notes-container")
        this.newNoteForm = document.querySelector("#new-note-from")
        this.inputNoteBody = document.getElementById("#input-note-body")
        this.newNoteForm.addEventListener('submit', this.createNote.bind(this))
    }

    fetchAndLoadNotes() {
        this.adapter.getNotes().then(notes => {
            // notes.forEach(note => this.notes.push(note))
            notes.forEach(note => this.notes.push(new Note(note)))
            // console.log('this is my notes array', this.notes)
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        let notesString = this.notes.map(note => note.renderNoteLi()).join('')
        this.notesContainer.innerHTML = notesString
    }

    createNote(e) {
        console.log(this)
        e.preventDefault()
        let noteInput = this.inputNoteBody.value

        this.adapter.createNote(noteInput)
    }

}