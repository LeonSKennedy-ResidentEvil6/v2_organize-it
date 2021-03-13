class Notes {
    constructor() {
        this.notes = []
        this.adapter = new NotesService()
        this.notesContainer = document.querySelector("#notes-container")
        this.inputNoteBody = document.querySelector("#input-note-body")
        this.initialSubmitEventListenersAndBinding()
        this.fetchAndLoadNotes()

    }

    // get notes from backend
    fetchAndLoadNotes() {
        this.adapter.getNotes().then(notes => {
            notes.forEach((note) => this.notes.push(new Note(note)));
        })
        .then(() => {
            console.log("render notes");
            this.renderNotes()
        })
    }

    initialSubmitEventListenersAndBinding () {
        console.log("initial submit binding")
        this.newNoteForm = document.querySelector("#new-note-from")
        this.newNoteForm.addEventListener('submit', this.createNote.bind(this))
    }

    bindingsAndEventListeners() {
        // this.newNoteForm.addEventListener('submit', this.createNote.bind(this))
        this.notesContainer.addEventListener('dblclick', this.handleNoteClick.bind(this))
        this.notesContainer.addEventListener('blur', this.updateNote.bind(this), true)
        console.log("bindings");
        this.deletes = document.querySelectorAll('.removeBtn')
        this.deletes.forEach((btn) => {
          btn.addEventListener("click", this.deleteNote.bind(this), true);
        });
    }

    deleteNote(e) {
        e.srcElement.parentNode.remove();
        this.notes.find( (note) => note.id = e.target.id).deleteNote()
    }

    //create note
    createNote(e) {
        e.preventDefault()
        let noteInput = this.inputNoteBody.value
        this.adapter.createNote(noteInput).then((note) => {
          this.notes.push(new Note(note));
        })
        .then( () => this.renderNotes() );
    }

    // render and display notes
    renderNotes() {
        this.notesContainer.innerHTML = this.notes.map(note => note.renderNoteLi()).join('');
        console.log("finish render notes");
        this.bindingsAndEventListeners()
    }

    // handle double click note lists enable edit or delete
    handleNoteClick(e) {
        this.toggleNote(e)
    }

    // note card is enabled to be edited
    toggleNote(e) {
        let noteLi = e.target
        noteLi.contentEditable = true
        noteLi.classList.add("contentEditable")
        noteLi.focus({preventScroll:true})
    }

    // update note
    updateNote(e) {
        let noteLi = e.target
        noteLi.contentEditable = false
        noteLi.classList.remove("contentEditable")
        let noteLiNewContent = noteLi.innerHTML
        let noteId = noteLi.getAttribute("note-id")
        this.adapter.updateNote(noteLiNewContent, noteId)
    }

}