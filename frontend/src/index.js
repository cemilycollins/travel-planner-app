document.addEventListener('DOMContentLoaded', init)

function init() {
  fetchTrips()
}

function fetchTrips() {
  fetch('http://localhost:3000/trips')
  .then(response => response.json())
  .then(json => {
    for(let trip of json) {
      renderSideBar(trip)
    }
  })
}

function renderSideBar(trip) {
  let sideBar = document.getElementById('invertedMenu')
  let a = document.createElement('a')
  a.addEventListener('click', renderTripProfile)
  a.classList.add("active", "item")
  sideBar.appendChild(a)
  a.innerText = trip.name
  a.dataset.id = trip.id
}

function fetchOneTrip(id) {
  return fetch('http://localhost:3000/trips')
  .then(response => response.json())
}

function renderTripProfile(event) {
  let id = event.currentTarget.dataset.id
  fetchOneTrip(id).then(tripJson => {
    createTripSegment(tripJson)
    createAccommodationSegment(tripJson)
  })
}

function createTripSegment(tripJson) {

}

function createSegment(name) {
  let segmentsDiv = document.querySelector('.twelve')
  
}

function createAccommodationSegment(tripJson) {

}
