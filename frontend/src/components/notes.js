class Notes {
    constructor() {
        this.notes = []
        this.adapter = new NotesService()
        // this.bindEventListensers()
        this.fetchAndLoadNotes()
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
        const notesContainer = document.querySelector("#notes-container")
        let notesString = this.notes.map(note => `<li id="${note.id}">${note.body}</li>`).join('')
        notesContainer.innerHTML = notesString
    }

}