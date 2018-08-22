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
  return fetch(`http://localhost:3000/trips/${id}`)
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
  let trip_info = document.getElementById('trip-description')
  let b = document.createElement('b')
  let b2 = document.createElement('b')
  let b3 = document.createElement('b')
  let p = document.createElement('p')
  let p2 = document.createElement('p')
  let p3 = document.createElement('p')

  trip_info.append(b, p, b2, p2, b3, p3)
  b.innerText = 'Trip Name: '
  b2.innerText = 'Start Date: '
  b3.innerText = 'End Date: '
  p.innerText = tripJson.name
  p2.innerText = tripJson.start_date
  p3.innerText = tripJson.end_date
  p.id = 'trip-name'
  p2.id = 'trip-start'
  p3.id = 'trip-end'
}
<<<<<<< HEAD
=======

function createSegment(name) {
  let segmentsDiv = document.querySelector('.twelve')
  
}

function createAccommodationSegment(tripJson) {

}
>>>>>>> aa04eea4d3ee5e8ef60b70c242954b894bd78eb9
