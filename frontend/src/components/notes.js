class Notes {
    constructor() {
        this.notes = []
        this.adapter = new NotesService()
        // this.bindEventListensers()
        this.fetchAndLoadNotes()
    }

    fetchAndLoadNotes() {
        this.adapter.getNotes().then(notes => {
            console.log(notes)
        })
    }
}