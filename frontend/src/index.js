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
  let div = document.createElement('div')
  let div1 = document.createElement('div')
  let div2 = document.createElement('div')
  let b = document.createElement('b')
  let b2 = document.createElement('b')
  let b3 = document.createElement('b')
  let p = document.createElement('p')
  let p2 = document.createElement('p')
  let p3 = document.createElement('p')

  trip_info.append(div, div1, div2)
  div.append(b, p)
  div1.append(b2, p2)
  div2.append(b3, p3)

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

function createSegment(name) {
  let segmentsDiv = document.querySelector('.twelve')


}

function createAccommodationSegment(tripJson) {

}
