class Ticket {

  static createTicketSegment(tripJson) {
    let segmentDiv = createSegment("Tickets")
    segmentDiv.querySelector('.button').dataset.id = tripJson.id
    // segmentDiv.querySelector('.button').addEventListener('click', renderNewTicketForm)
    let cardsDiv = segmentDiv.querySelector('.cards')
    if (tripJson.tickets.length > 0) {
      tripJson.tickets.forEach(ticket => {
        let tick = new Ticket()
        tick.addTicketCard(ticket, cardsDiv)
      })
    }
  }

  addTicketCard(ticket, cardsDiv) {
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
}
