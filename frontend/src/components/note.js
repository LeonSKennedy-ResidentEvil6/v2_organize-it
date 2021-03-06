class Note {
    constructor(note) {
        this.id = note.id
        this.body = note.body
    }

    renderNoteLi() {
        return `<li note-id=${this.id} id="note-card">${this.body} <input type="button" class="delete" value="Delete"/></li>`
    }
}