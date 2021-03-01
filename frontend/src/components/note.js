class Note {
    constructor(note) {
        this.id = note.id
        this.body = note.body
    }

    renderNoteLi() {
        return `<li note-id="${this.id}">${this.body}</li>`
    }
}