class Note {
    constructor(note) {
        this.id = note.id
        this.body = note.body
    }

    renderNoteLi() {
        // return `<li note-id=${this.id}>${this.body} <input type="button" id="delete" class="delete" value="Delete"/></li>`
        const notesContent = document.querySelector('#notes-content')
        const notesLiMarkup = `
            <li note-id=${this.id}>${this.body}</li>
        <br>
        `
        const notesContainer = document.createElement("ul")
        notesContainer.innerHTML = notesLiMarkup
        notesContent.appendChild(notesContainer)

        let removeNote = document.createElement('button')
        removeNote.setAttribute("id", this.id)
        removeNote.innerHTML = "Delete This Note"
        removeNote.addEventListener("click", e => deleteNote(e))
        notesContent.appendChild(removeNote)
    }


}