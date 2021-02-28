class Notes {
    constructor() {
        this.notes = []
        this.adapter = new NotesService()
        // this.bindEventListensers()
        this.fetchAndLoadNotes()
    }

    fetchAndLoadNotes() {
        this.adapter.getNotes().then(notes => {
            notes.forEach(note => this.notes.push(note))
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        const notesContainer = document.querySelector("#notes-container")
        notesContainer.innerHTML = "my notes go here"
    }

}