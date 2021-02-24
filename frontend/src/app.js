const eventsEndPoint = "http://127.0.0.1:3000/events"
const participantEndPoint = "http://127.0.0.1:3000/participants"

// Load forms and other content to app html page
document.addEventListener('DOMContentLoaded', () => {
    const createEventForm = document.querySelector('#event-form');
    createEventForm.addEventListener("submit", e => createEventFormHandler(e));

    const createParticipantForm = document.querySelector('#participant-form')
    createParticipantForm.addEventListener("submit", (e) => createParticipantFormHandler(e));

    getEvents();
})

// get event
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
function postEvent(newEventData){
    fetch(eventsEndPoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         },
        body: JSON.stringify({newEventData})
    })
    .then(response => response.json())
    .then(event => {
        const newEvent = new Event(event.data)
        newEvent.renderEvent();
    })
    .catch(error => { alert(error.message) })
}

// delete event
function deleteEvent(e){
    fetch(evenstEndPoint + `/${e.target.id}`, {
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

    fetch(studentsEndPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(participantObject)
    })
    .then(resp => resp.json())
    .then(participant => {
        let newParticipant = new Participant(participant.data)
        newParticipant.renderParticipant()
        // location.reload()
    })
    .catch(error => {alert(error.message)})
}

// delete participant
function deleteParticipant(e){
    fetch(participantEndPoint + `/${e.target.id}`, {
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