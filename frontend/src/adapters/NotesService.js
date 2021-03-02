class NotesService {
    constructor() {
        this.baseUrl = "http://127.0.0.1:3000/api/v1/notes"
    }

    async getNotes() {
        return fetch(this.baseUrl).then(resp => resp.json())
    }

    async createNote(noteInput) {
        let note = { body: noteInput }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            //   body: JSON.stringify({
            //       note: {
            //         body: noteInput
            //       }
            // }),
            body: JSON.stringify({note}),
        })
        .then(response => response.json())

    }

    async updateNote(noteLiNewContent, noteId) {
        // let newNoteList = { body: noteLiNewContent} 
        return fetch(`${this.baseUrl}/${noteId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
              }, 
              body: JSON.stringify({
                  note: {
                    body: noteLiNewContent
                  }
            }),
            // body: JSON.stringify({newNoteList}),
        })
        .then(response => response.json())

    }
}
