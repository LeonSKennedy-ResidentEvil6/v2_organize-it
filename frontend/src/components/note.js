class Note {
    constructor(note) {
        this.id = note.id
        this.body = note.body
    }

    renderNoteLi() {
        return `<li note-id=${this.id} id="note-card">${this.body}</li>`
    }
}