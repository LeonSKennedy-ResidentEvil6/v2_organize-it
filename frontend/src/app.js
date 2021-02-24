document.addEventListener('DOMContentLoaded', () => {
    getEvent()
});

async function getEvent() {
    fetch("http://127.0.0.1:3000/events")
        .then(response => response.json())
        .then(result => console.log(result))
        .catch((error) => alert(error.message))
}