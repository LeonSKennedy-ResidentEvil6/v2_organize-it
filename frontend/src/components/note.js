class Note {
    constructor(note) {
        this.id = note.id
        this.body = note.body
    }

    renderNoteLi() {
        return `<li id="${this.id}">${this.body}</li>`
    }
}