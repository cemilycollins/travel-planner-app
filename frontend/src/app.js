class App {

static fetchOneTrip(id) {
    return fetch(`http://localhost:3000/trips/${id}`)
    .then(response => response.json())
  }

static fetchOneAcc(id) {
  return fetch(`http://localhost:3000/accommodations/${id}`)
  .then(response => response.json())
}

static fetchOneTicket(id) {
  return fetch(`http://localhost:3000/tickets/${id}`)
  .then(response => response.json())
}

static fetchOneExperience(id) {
  return fetch(`http://localhost:3000/experiences/${id}`)
  .then(response => response.json())
}

static postFetchTrip(start_date, end_date, name, img_url) {
    return fetch(`http://localhost:3000/trips/`, {
      method: "POST",
      body: JSON.stringify({
        start_date: start_date,
        end_date: end_date,
        name: name,
        img_url: img_url
      }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(response => response.json())
    .then(json => {
      Trip.renderSideBar(json)
      renderNewTripProfile(json)
  })
  let tripForm = document.getElementById('new-trip-form')
  tripForm.innerHTML = ""
}

static postFetchAcc(city, start_date, end_date, address, relevant_info, trip_id) {
  fetch(`http://localhost:3000/accommodations/`, {
    method: "POST",
    body: JSON.stringify({
      start_date: start_date,
      end_date: end_date,
      city: city,
      address: address,
      relevant_info: relevant_info,
      trip_id: trip_id
    }),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }).then(response => response.json())
  .then(json => {
    let cardsDivs = document.querySelectorAll('.cards')
    Accommodation.addAccommodationCard(json, cardsDivs[0])
    cardsDivs[0].parentNode.querySelector('#form').innerHTML = ""
    Accommodation.accCardEventListeners()
  })
}

static postFetchExp (name, date, city, address, relevant_info, trip_id) {
  fetch(`http://localhost:3000/experiences/`, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      date: date,
      city: city,
      address: address,
      relevant_info: relevant_info,
      trip_id: trip_id
    }),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }).then(response => response.json())
  .then(json => {
    let cardsDivs = document.querySelectorAll('.cards')
    Experience.addExperienceCard(json, cardsDivs[2])
    cardsDivs[2].parentNode.querySelector('#form').innerHTML = ""
    Experience.expCardEventListeners()
  })
}

static postFetchTicket (type_of, departure_date_time, departure_location, arrival_date_time, arrival_location, price, relevant_info, trip_id) {
  fetch(`http://localhost:3000/tickets/`, {
    method: "POST",
    body: JSON.stringify({
      type_of: type_of,
      departure_date_time: departure_date_time,
      departure_location: departure_location,
      arrival_date_time: arrival_date_time,
      arrival_location: arrival_location,
      price: price,
      relevant_info: relevant_info,
      trip_id: trip_id
    }),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }).then(response => response.json())
  .then(json => {
    let cardsDivs = document.querySelectorAll('.cards')
    Ticket.addTicketCard(json, cardsDivs[1])
    cardsDivs[1].parentNode.querySelector('#form').innerHTML = ""
    Ticket.ticketCardEventListeners()
  })
}

static patchFetchAcc(id, city, start_date, end_date, address, relevant_info) {
  return fetch(`http://localhost:3000/accommodations/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      start_date: start_date,
      end_date: end_date,
      city: city,
      address: address,
      relevant_info: relevant_info
    }),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }).then(response => response.json())
}

static patchFetchTicket(id, type_of, departure_date_time, departure_location, arrival_date_time, arrival_location, price, relevant_info) {
  return fetch(`http://localhost:3000/tickets/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      type_of: type_of,
      departure_date_time: departure_date_time,
      departure_location: departure_location,
      arrival_date_time: arrival_date_time,
      arrival_location: arrival_location,
      price: price,
      relevant_info: relevant_info
    }),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }).then(response => response.json())
}

static patchFetchAcc(id, city, start_date, end_date, address, relevant_info) {
  return fetch(`http://localhost:3000/accommodations/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      start_date: start_date,
      end_date: end_date,
      city: city,
      address: address,
      relevant_info: relevant_info
    }),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }).then(response => response.json())
}

static patchFetchExp(id, name, date, city, address, relevant_info) {
  return fetch(`http://localhost:3000/experiences/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      name: name,
      date: date,
      city: city,
      address: address,
      relevant_info: relevant_info
    }),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }).then(response => response.json())
}

  static tripEditPatch(event) {
    let current = event.currentTarget
    let id = current.dataset.id
    let sideBar = document.getElementById(`sidebar-${id}`)
    let name = document.getElementById('edit-trip-name').value
    let start_date = document.getElementById('edit-trip-start').value
    let end_date = document.getElementById('edit-trip-end').value
    let img = document.getElementById('edit-trip-url').value
    sideBar.innerText = name
    fetch(`http://localhost:3000/trips/${id}`, {
      method: "PATCH",
      headers: {"Content-type": "application/json",
                "Accept": "application/json"
            },
      body: JSON.stringify ({
        start_date: start_date,
        end_date: end_date,
        name: name,
        img_url: img
      })
    }).then(response => response.json())
    .then(json => {
      renderNewTripProfile(json)
    })
  }
}
