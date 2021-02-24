class Participant {

    constructor(participant) {
        this.id = participant.id
        this.full_name = participant.full_name
        this.email = participant.email
        this.phone_number = participant.phone_number
        this.event = participant.event_id

        Event.all.push(this)
    }

    renderParticipant() {
        const participantCards = document.querySelector('#card-container')

        const cardMarkup = `
            <div class="single-card" id=${this.id} style="border: 5px black">
                <h3 class="card-full-name">Participant Name: ${this.full_name}</h3>
                <h3 class="card-email">Participant Email: ${this.email}</h3>
                <h3 class="card-phone-number">Participant Phone Number: ${this.phone_number}</h3>
            </div>
            <br>
        `;

        let cardElement = document.createElement('div')
        cardElement.innerHTML = cardMarkup
        participantCards.appendChild(cardElement)

        let removeParticipant = document.createElement('div')
        removeParticipant.setAttribute("id", this.id)
        removeParticipant.innerHTML = "Remove Participant"
        removeParticipant.addEventListener("click", e => deleteEvent(e))
        participantCards.appendChild(removeParticipant)
    }

}

Event.all = []