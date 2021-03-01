class Notes {
    constructor() {
        this.notes = []
        this.adapter = new NotesService()
        this.bindingsAndEventListeners() //instead of caching DOM, use this method to make code more efficient. how?
        this.fetchAndLoadNotes()
    }

    bindingsAndEventListeners() {
        this.notesContainer = document.querySelector("#notes-container")
        this.inputNoteBody = document.querySelector("#input-note-body")
        this.newNoteForm = document.querySelector("#new-note-from")
        this.newNoteForm.addEventListener('submit', this.createNote.bind(this))
        this.notesContainer.addEventListener('dblclick', this.handleNoteClick.bind(this))
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

    // render and display notes
    render() {
        let notesString = this.notes.map(note => note.renderNoteLi()).join('')
        this.notesContainer.innerHTML = notesString
    }

    //create note
    createNote(e) {
        e.preventDefault()
        let noteInput = this.inputNoteBody.value
        this.adapter.createNote(noteInput).then(note => {this.notes.push(new Note(note))})
        this.render()
        window.location.reload();
    }

    // edit note
    handleNoteClick(e) {
        console.log(e.target)
    }
}