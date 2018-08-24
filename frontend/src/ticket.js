class Ticket {

  static createTicketSegment(tripJson) {
    let segmentDiv = createSegment("Tickets")
    segmentDiv.querySelector('.button').dataset.id = tripJson.id
    segmentDiv.querySelector('.button').addEventListener('click', Ticket.renderNewTicketForm)
    let cardsDiv = segmentDiv.querySelector('.cards')
    if (tripJson.tickets.length > 0) {
      tripJson.tickets.forEach(ticket => {
        Ticket.addTicketCard(ticket, cardsDiv)
      })
      document.querySelectorAll('#edit-ticket').forEach(editButton => {
        editButton.addEventListener('click', Ticket.renderEditForm)
      })
      document.querySelectorAll('#delete-ticket').forEach(deleteButton => {
        deleteButton.addEventListener('click', Ticket.deleteticket)
      })
    }
  }

  static addTicketCard(ticket, cardsDiv) {
    cardsDiv.innerHTML += `<div class="card" data-id="${ticket.id}">
      ${Ticket.renderCard(ticket)}
    </div>`
  }

  static renderCard(ticket) {
    return `<div class="content">
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
          <div class="ui basic blue button" id="edit-ticket" data-id="${ticket.id}">Edit</div>
          <div class="ui basic red button" id="delete-ticket" data-id="${ticket.id}">Delete</div>
        </div>
      </div>
    </div>`
  }

  static renderNewTicketForm(e) {
    let form = e.currentTarget.parentNode.querySelector('#form')
    let id = e.currentTarget.dataset.id
    form.innerHTML = ""
    form.innerHTML = `<form class="ui form">
    <br>
    <h4 class="ui dividing header">New Ticket</h4>
    <div class="field">
      <div class="one field">
        <label>Type *</label>
        <div class="field">
          <input type="text" id="type-of" placeholder="Transportation Type">
        </div>
        <label>Departure Date and Time *</label>
        <div class="field">
          <input type="text" id="departure-date-time" placeholder="MM/DD/YYY ##:## AM/PM">
        </div>
        <label>Departure Location *</label>
        <div class="field">
          <input type="text" id="departure-location" placeholder="Location">
        </div>
        <label>Arrival Date and Time *</label>
        <div class="field">
          <input type="text" id="arrival-date-time" placeholder="MM/DD/YYY ##:## AM/PM">
        </div>
        <label>Arrival Location *</label>
        <div class="field">
          <input type="text" id="arrival-location" placeholder="Location">
        </div>
        <label>Price *</label>
        <div class="field">
          <input type="text" id="price" placeholder="Enter price without dollar signs">
        </div>
        <label>Other Relevant Info</label>
        <div class="field">
          <input type="text" id="relevant-info" placeholder="Other Info">
        </div>
        <div class="ui button" id="new-ticket-submit" data-id="${id}" tabindex="0">Submit</div>
        </form>`

        let createButton = document.getElementById('new-ticket-submit')
        createButton.addEventListener('click', Ticket.createNewTicket)
  }

  static createNewTicket(e) {
    let tripid = e.currentTarget.dataset.id
    let formInputs = e.currentTarget.parentNode.querySelectorAll('input')
    debugger
    App.postFetchTicket(formInputs[0].value, formInputs[1].value, formInputs[2].value, formInputs[3].value, formInputs[4].value, formInputs[5].value, formInputs[6].value, tripid)
  }

  static renderEditForm(e) {
    let id = e.currentTarget.dataset.id
    let ticket
    let form = e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('#form')
    debugger
    App.fetchOneTicket(id).then(json => {
      ticket = json
    form.innerHTML = `<form class="ui form">
    <br>
    <h4 class="ui dividing header">Edit This Ticket</h4>
    <div class="field">
      <div class="one field">
      <label>Type *</label>
      <div class="field">
        <input type="text" id="type-of" value="${ticket.type_of}">
      </div>
      <label>Departure Date and Time *</label>
      <div class="field">
        <input type="text" id="departure-date-time" value="${ticket.departure_date_time}">
      </div>
      <label>Departure Location *</label>
      <div class="field">
        <input type="text" id="departure-location" value="${ticket.departure_location}">
      </div>
      <label>Arrival Date and Time *</label>
      <div class="field">
        <input type="text" id="arrival-date-time" value="${ticket.arrival_date_time}">
      </div>
      <label>Arrival Location *</label>
      <div class="field">
        <input type="text" id="arrival-location" value="${ticket.arrival_location}">
      </div>
      <label>Price *</label>
      <div class="field">
        <input type="text" id="price" value="${ticket.price}">
      </div>
      <label>Other Relevant Info</label>
      <div class="field">
        <input type="text" id="relevant-info" value="${ticket.relevant_info}">
      </div>
      <div class="ui button" id="submit-edit-ticket" data-id="${ticket.id}" tabindex="0">Submit</div>
        </form>`

        let editButton = document.getElementById('submit-edit-ticket')
        editButton.addEventListener('click', Ticket.updateTicket)
    })
  }

  static updateTicket(e) {
    let id = e.currentTarget.dataset.id
    let formInputs = e.currentTarget.parentNode.querySelectorAll('input')
    let cards = e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll('.card')
    let formDiv = e.currentTarget.parentNode.parentNode.parentNode.parentNode
    App.patchFetchTicket(id, formInputs[0].value, formInputs[1].value, formInputs[2].value, formInputs[3].value, formInputs[4].value, formInputs[5].value, formInputs[6].value).then(json => {
      cards.forEach(card => {
        if (card.dataset.id == id) {
          card.innerHTML = Ticket.renderCard(json)
        }
      })
      formDiv.innerHTML = ""
    })
  }

  static deleteTicket(e) {
    let id = e.currentTarget.dataset.id
  }

}
