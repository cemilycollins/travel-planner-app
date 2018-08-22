let addTrip = document.getElementById('new-trip')

document.addEventListener('DOMContentLoaded', init)

function init() {
  fetchTrips()
  addTrip.addEventListener('click', createNewTrip)
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
  app.fetchOneTrip(id).then(tripJson => {
    renderTripSegment(tripJson)
    Accommodation.createAccommodationSegment(tripJson)
    Ticket.createTicketSegment(tripJson)
    Experience.createExperienceSegment(tripJson)
  })
}

function renderTripSegment(tripJson) {
  createTripSegment()
  let trip_info = document.getElementById('trip-description')
  trip_info.innerHTML = ""
  let img = document.createElement('img')
  let b = document.createElement('b')
  let b2 = document.createElement('b')
  let b3 = document.createElement('b')
  let p = document.createElement('p')
  let p2 = document.createElement('p')
  let p3 = document.createElement('p')

  trip_info.append(b, p, b2, p2, b3, p3, img)
  b.innerText = 'Trip Name: '
  b2.innerText = 'Start Date: '
  b3.innerText = 'End Date: '
  p.innerText = tripJson.name
  p2.innerText = tripJson.start_date
  p3.innerText = tripJson.end_date
  img.src = tripJson.img_url
  p.id = 'trip-name'
  p2.id = 'trip-start'
  p3.id = 'trip-end'
}

function createTripSegment() {
  let segmentsDiv = document.querySelector('.twelve')
  let div = document.createElement('div')
  let div1 = document.createElement('div')
  let div2 = document.createElement('div')
  let div3 = document.createElement('div')
  let div4 = document.createElement('div')
  let div5 = document.createElement('div')

  segmentsDiv.appendChild(div)
  div.append(div1, div2, div3)
  div3.append(div4, div5)
  div.classList.add("ui", "segment")
  div1.classList.add("ui", "top", "attached", "label")
  div2.className = "description"
  div3.classList.add("ui", "two", "buttons")
  div4.classList.add("ui", "basic", "blue", "button")
  div5.classList.add("ui", "basic", "red", "button")

  div2.id = "trip-description"
  div4.id = "edit-trip"
  div5.id = "delete-trip"
  div1.innerText = "Trip Information"
  div4.innerText = "Edit"
  div5.innerText = "Delete"
}

function createSegment(name) {
  let columnDiv = document.querySelector('.twelve')
  let segmentDiv = document.createElement('div')
  let labelDiv = document.createElement('div')
  let addButtonDiv = document.createElement('div')
  let cardsDiv = document.createElement('div')

  segmentDiv.classList.add("ui", "segment")
  labelDiv.classList.add("ui", "top", "attached", "label")
  addButtonDiv.classList.add("ui", "blue", "button")
  cardsDiv.classList.add("ui", "cards")

  addButtonDiv.innerText = "Add New"
  labelDiv.innerText = name

  columnDiv.appendChild(segmentDiv)
  segmentDiv.append(labelDiv, addButtonDiv, cardsDiv)

  return segmentDiv
}
