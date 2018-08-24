const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let addTrip = document.getElementById('new-trip')
let home = document.getElementById('homeButton')

document.addEventListener('DOMContentLoaded', init)

function init() {
  fetchTrips()
  addTrip.addEventListener('click', createNewTrip)
  home.addEventListener('click', wipeTripInfo)
  konamiCode()
}

function createNewTrip() {
  Trip.newTrip()
}

function fetchTrips() {
  fetch('http://localhost:3000/trips')
  .then(response => response.json())
  .then(json => {
    for(let trip of json) {
      Trip.renderSideBar(trip)
    }
  })
}

function renderTripProfile(event) {
  let id = event.currentTarget.dataset.id
  let app = new App()
    App.fetchOneTrip(id).then(tripJson => {
    renderNewTripProfile(tripJson)
  })
}

function createSegment(name) {
  let columnDiv = document.querySelector('.twelve')
  let segmentDiv = document.createElement('div')
  let labelDiv = document.createElement('div')
  let addButtonDiv = document.createElement('div')
  let cardsDiv = document.createElement('div')
  let formDiv = document.createElement('div')

  segmentDiv.classList.add("ui", "segment")
  labelDiv.classList.add("ui", "top", "attached", "label")
  addButtonDiv.classList.add("ui", "blue", "button")
  cardsDiv.classList.add("ui", "cards")
  formDiv.id = "form"

  addButtonDiv.innerText = "Add New"
  labelDiv.innerText = name

  columnDiv.appendChild(segmentDiv)
  segmentDiv.append(labelDiv, addButtonDiv, formDiv, cardsDiv)

  return segmentDiv
}

function renderNewTripProfile(tripJson) {
    Trip.renderTripSegment(tripJson)
    Accommodation.createAccommodationSegment(tripJson)
    Ticket.createTicketSegment(tripJson)
    Experience.createExperienceSegment(tripJson)
}

function wipeTripInfo() {
  let tripInfoContainer = document.getElementById('twelve')
  tripInfoContainer.innerHTML = ""
}

function konamiCode() {
  let input = document.querySelector('body')
  let i = 0
  input.addEventListener('keydown', function(e) {
    if (e.key === codes[i]) {
      i++
      if (i === codes.length){
        alert('Hey! You found the GOLDEN EGG!!! SEE ANN FOR A ALL EXPENSES PAID MONTH LONG VACATION! ENJOY!')
        i = 0
      }
    } else {
      i = 0
    }
  })
}
