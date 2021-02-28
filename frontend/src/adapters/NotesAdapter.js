class NotesAdapter {
    constructor() {
        this.baseUrl = "http://127.0.0.1:3000/api/v1/notes"
    }

    getNotes() {
        return fetch(this.baseUrl)
        .then(resp => resp.json()
        )
    }
}
