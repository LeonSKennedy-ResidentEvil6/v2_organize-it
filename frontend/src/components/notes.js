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
        // this.notesContainer.addEventListener('dblclick', this.handleNoteClick.bind(this))
        // take notes here: need to select parent to add event listener. why?
        this.body = document.querySelector('body')
        this.body.addEventListener('dblclick', this.handleNoteClick.bind(this))
        this.body.addEventListener('focusout', this.updateNote.bind(this), true)
        // this.body.addEventListener('mouseover', this.deleteNote.bind(this), true)
    }

    // get notes from backend
    fetchAndLoadNotes() {
        this.adapter.getNotes().then(notes => {
            // notes.forEach(note => this.notes.push(note))
            notes.forEach(note => this.notes.push(new Note(note)))
            // console.log('this is my notes array', this.notes)
        })
        .then(() => {
            this.renderNotes()
        })
    }

    // render and display notes
    renderNotes() {
        let notesString = this.notes.map(note => note.renderNoteLi()).join('')
        this.notesContainer.innerHTML = notesString
    }

    //create note
    createNote(e) {
        e.preventDefault()
        let noteInput = this.inputNoteBody.value
        this.adapter.createNote(noteInput).then(note => {this.notes.push(new Note(note))})
        this.renderNotes()
        window.location.reload();
    }

    // able to edit note
    handleNoteClick(e) {
        let noteLi = e.target
        noteLi.contentEditable = true
        noteLi.classList.add("contentEditable")
        noteLi.focus({preventScroll:true})
        // add delete button upon double clicking
        noteLi.innerHTML += '<button onclick="deleteNote()" id="delete-btn">'
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

    //delete note
    deleteNote(e) {
        console.log(e.target)
        // method 1 -> mouse hover over -> delete button appear -> click button -> fetch delete -> update DOM
        // method 2 -> double click note -> delete button appear -> click button -> fetch delete -> update DOM
        // method 3 -> add delete button upon new note is created - click button -> fetch delete -> update DOM

    // let deleteBtn = document.getElementById('delete-btn')
    // console.log(deleteBtn)
    // deleteBtn.addEventListener('click', this.deleteNote.bind(this), true)
    }
}