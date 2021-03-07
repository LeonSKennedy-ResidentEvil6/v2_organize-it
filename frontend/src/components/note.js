class Note {
    constructor(note) {
        this.id = note.id
        this.body = note.body
    }

    renderNoteLi() {
        // return `<li note-id=${this.id}>${this.body} <input type="button" id=${this.id} class="delete" value="Delete"/></li>`
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
        notesContainer.appendChild(removeNote)
        removeNote.addEventListener("click", (e) => this.deleteNote(e))
    }

    deleteNote(e) {
        fetch("http://127.0.0.1:3000/api/v1/notes" + `/${e.target.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
    }

}