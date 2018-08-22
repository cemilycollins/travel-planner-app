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

function createAccommodationSegment(tripJson) {
  let segmentDiv = createSegment("Accommodations")
  segmentDiv.querySelector('.button').dataset.id = tripJson.id
  // segmentDiv.querySelector('.button').addEventListener('click', renderNewAccForm)
  let cardsDiv = segmentDiv.querySelector('.cards')
  if (tripJson.accommodations.length > 0) {
    tripJson.accommodations.forEach(acc => {
      addAccommodationCard(acc, cardsDiv)
    })
  }
}

function addAccommodationCard(acc, cardsDiv) {
  cardsDiv.innerHTML += `<div class='card'> \
    <div class='content'> \
      <div class='header' id='name'>${acc.city}</div> \
      <div class='meta' id='start-end-dates'>${acc.start_date} - ${acc.end_date}</div> \
      <div class='description'> \
        <b id='address'>Address: ${acc.address}</b> \
        <p id='relevant-info'>${acc.relevant_info}</p> \
      </div> \
    </div> \
    <div class='extra content'> \
      <div class='ui two buttons'> \
        <div class='ui basic blue button' id='edit-accommodation' data-id=${acc.id}>Edit</div> \
        <div class='ui basic red button' id='delete-accommodation' data-id=${acc.id}>Delete</div> \
      </div> \
    </div> \
  </div>`
}

function createTicketSegment(tripJson) {
  let segmentDiv = createSegment("Tickets")
  segmentDiv.querySelector('.button').dataset.id = tripJson.id
  // segmentDiv.querySelector('.button').addEventListener('click', renderNewTicketForm)
  let cardsDiv = segmentDiv.querySelector('.cards')
  if (tripJson.tickets.length > 0) {
    tripJson.tickets.forEach(ticket => {
      addTicketCard(ticket, cardsDiv)
    })
  }
}

function addTicketCard(ticket, cardsDiv) {
  cardsDiv.innerHTML += `<div class="card">
    <div class="content">
      <div class="header">
        ${ticket.type_of}
      </div>
      <div class="description">
        <b>Departure Date and Time: </b><p id="departure-date-time">${ticket.departure_date_time}</p>
        <b>Departure Location: </b><p id="departure-location">${ticket.departure_location}</p>
        <b>Arrival Date and Time: </b><p id="arrival-date-time">${ticket.arrival_date_time}</p>
        <b>Arrival Location: </b><p id="arrival-location">${ticket.arrival_location}</p>
        <b>Price: </b><p id="price">$${ticket.price}</p>
        <b>Other Info: </b><p id="relevant-info">${ticket.relevant_info}</p><br>
      </div>
      <div class="extra content">
        <div class="ui two buttons">
          <div class="ui basic blue button" id="edit-ticket" data-id="ticket-id">Edit</div>
          <div class="ui basic red button" id="delete-ticket" data-id="ticket-id">Delete</div>
        </div>
      </div>
    </div>
  </div>`
}

function createExperienceSegment(tripJson) {
  let segmentDiv = createSegment("Experiences")
  segmentDiv.querySelector('.button').dataset.id = tripJson.id
  // segmentDiv.querySelector('.button').addEventListener('click', renderNewExperienceForm)
  let cardsDiv = segmentDiv.querySelector('.cards')
  if (tripJson.experiences.length > 0) {
    tripJson.experiences.forEach(exp => {
      addExperienceCard(exp, cardsDiv)
    })
  }
}

function addExperienceCard(exp, cardsDiv) {
  cardsDiv.innerHTML += `<div class="card">
    <div class="content">
      <div class="header" id="name">${exp.name}</div>
      <div class="meta" id="date">${exp.date}</div>
      <div class="description">
        <b id="address">Address: ${exp.address}</b>
        <p id="relevant-info">${exp.relevant_info}</p>
      </div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic blue button" id="edit-experience">Edit</div>
        <div class="ui basic red button" id="delete-experience">Delete</div>
      </div>
    </div>
  </div>`
}
