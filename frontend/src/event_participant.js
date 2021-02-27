const eventsEndPoint = "http://127.0.0.1:3000/events"
const participantsEndPoint = "http://127.0.0.1:3000/participants"

// Load forms and other core compenents to the user show page
document.addEventListener('DOMContentLoaded', () => {
    const createEventForm = document.querySelector('#event-form');
    createEventForm.addEventListener("submit", (e) => createEventFormHandler(e));

    const createParticipantForm = document.querySelector('#participant-form')
    createParticipantForm.addEventListener("submit", (e) => createParticipantFormHandler(e));
    // display current all events
    getEvents();
})

// get event from backend
async function getEvents() {
    fetch(eventsEndPoint)
    .then(response => response.json())
    .then(events => {
        events.data.forEach(event => {
            const newEvent = new Event(event)
            newEvent.renderEvent();
        })
    })
}

// create event
function createEventFormHandler(e) {
    e.preventDefault()
    const eventNameInput = document.querySelector('#input-event-name').value
    const eventDescriptionInput = document.querySelector('#input-event-description').value
    postEvent(eventNameInput, eventDescriptionInput)
}

// post event
function postEvent(eventNameInput, eventDescriptionInput) {
    fetch(eventsEndPoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         },
        body: JSON.stringify({
            event: {
                name: eventNameInput,
                description: eventDescriptionInput
            }
        })
    })
    .then(response => response.json())
    .then(result => {
        const newEvent = new Event(result.data)
        newEvent.renderEvent();
        location.reload()
    })
    .catch(error => { alert(error.message) })
}

// delete event
function deleteEvent(e){
    fetch(eventsEndPoint + `/${e.target.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    .then(function(resp){
        if(resp.status = 204)
            location.reload();
        else
            throw new Error(resp.message)
            console.log(resp.status)
    })
    .catch(error => {alert(error.message)})
}

//create participant
function createParticipantFormHandler(e) {
    e.preventDefault()
    const fullNameInput = document.querySelector('#full-name').value
    const emailInput = document.querySelector('#email').value
    const phoneNumberInput = document.querySelector('#phone-number').value
    const eventId = document.querySelector('#event-list').value
    postParticipant(fullNameInput, emailInput, phoneNumberInput, eventId)
}

// post participant
function postParticipant (full_name, email, phone_number, event_id){
    const participantObject = {full_name, email, phone_number, event_id}

    fetch(participantsEndPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(participantObject)
    })
    .then(resp => resp.json())
    .then(participant => {
        let newParticipant = new Participant(participant.data)
        newParticipant.renderParticipant()
        location.reload()
    })
    .catch(error => {alert(error.message)})
}

// display all participants
function renderParticipants(e) {
    const participantsCards = document.querySelector('#card-container')
    participantsCards.innerHTML = `Selected Event: ${e.target.innerHTML}`

    //display event description
    fetch(eventsEndPoint + `/${e.target.id}`)
    .then(response => response.json())
    .then(event => {
        let newEvent = new Event(event.data)
      
        let aboutThisEventText = document.createElement('h3')
        aboutThisEventText.innerText = `About This Event:`

        let editableMsg = document.createElement('p')
        editableMsg.style.color = "red"
        editableMsg.innerHTML = `(Click on the event description to edit)`

        let eventDescription = newEvent.description
        let selectedEventDescription = document.createElement('h2')
        selectedEventDescription.innerText = `${eventDescription}`
        selectedEventDescription.setAttribute("id", "eventDespEditable")
        selectedEventDescription.contentEditable = 'true'
        
        participantsCards.append(aboutThisEventText, editableMsg, selectedEventDescription)
        })

    let removeEvent = document.createElement('button')
    removeEvent.innerHTML = `Remove this event`
    removeEvent.setAttribute("id", e.target.id)
    removeEvent.addEventListener("click", (e) => deleteEvent(e))
    participantsCards.appendChild(removeEvent)

    fetch(eventsEndPoint + `/${e.target.id}`)
    .then(response => response.json())
    .then(event => {
        event.data.attributes.participants.sort(sortParticipants).forEach(participant => {
            let newParticipant = new Participant(participant)
            newParticipant.renderParticipant()
        })
        
    })
    .catch(error => { alert(error.message)})
}

// sort participants by their full name
function sortParticipants(a, b) {
    let nameA = a.full_name.toUpperCase();
    let nameB = b.full_name.toUpperCase();
    if (nameA < nameB) { return -1 };
    if (nameB > nameA) { return 1 };
    return 0
}

// edit event description
function editEvent(e){
    fetch(eventsEndPoint + `/${e.target.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify()
    })
    .then(resp => resp.json())
    .then(result => console.log(result))
    .catch(error => {alert(error.message)})
}


// delete participant
function deleteParticipant(e){
    fetch(participantsEndPoint + `/${e.target.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    .then(function(resp){
        if(resp.status = 204)
            location.reload();
        else
            throw new Error(resp.message)
            console.log(resp.status)
    })
    .catch(error => {alert(error.message)})
}

