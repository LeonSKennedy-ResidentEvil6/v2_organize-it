class NotesService {
    constructor() {
        this.baseUrl = "http://127.0.0.1:3000/api/v1/notes"
    }

    async getNotes() {
        return fetch(this.baseUrl).then(resp => resp.json())
    }
}
