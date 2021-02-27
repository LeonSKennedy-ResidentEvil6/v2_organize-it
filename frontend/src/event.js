class Event {

    constructor(event) {
        this.id = event.id
        this.name = event.attributes.name
        this.description = event.attributes.description
        this.participants = event.attributes.participants
        Event.all.push(this)
    }

    renderEvent() {
        const eventList = document.querySelector('#event-list')
        const eventListMarkup = `${this.name}`
        let eventListOption = document.createElement('option')
        eventListOption.innerText = eventListMarkup
        eventListOption.setAttribute('id', this.id)
        eventListOption.setAttribute('value', this.id)
        eventList.appendChild(eventListOption)

        let eventButton = document.createElement('button')
        eventButton.setAttribute('id', this.id)
        eventButton.innerHTML = `${this.name}`
        eventButton.addEventListener('click', (e) => { renderParticipants(e) });

        const eventSelector = document.querySelector('#event-selector')
        eventSelector.appendChild(eventButton);
    }

    // static editEvent() {
    //     this.aboutThisEventText = document.createElement('h3').innerText = `About This Event:`
    //     // aboutThisEventText.innerText = `About This Event:`

    //     this.editableMsg = document.createElement('p')
    //     this.editableMsg.style.color = "red"
    //     this.editableMsg.innerHTML = `(Click on the event description to edit)`

    //     this.eventDescription = newEvent.description
    //     this.selectedEventDescription = document.createElement('h2')
    //     this.selectedEventDescription.innerText = `${eventDescription}`
    //     this.selectedEventDescription.setAttribute("id", "eventDespEditable")
    //     this.selectedEventDescription.contentEditable = 'true'
       
    //     this.eventDesp = document.getElementById("eventDespEditable")
    //     this.eventDesp.addEventListener('dblclick', function() {console.log('yoooo double click')})
        
    //     this. participantsCards.append(aboutThisEventText, editableMsg, selectedEventDescription)
    // }

}

  

Event.all = []