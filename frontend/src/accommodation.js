class Accommodation {

  constructor() {

  }

  static createAccommodationSegment(tripJson) {
    let segmentDiv = createSegment("Accommodations")
    segmentDiv.querySelector('.button').dataset.id = tripJson.id
    // segmentDiv.querySelector('.button').addEventListener('click', renderNewAccForm)
    let cardsDiv = segmentDiv.querySelector('.cards')
    if (tripJson.accommodations.length > 0) {
      tripJson.accommodations.forEach(acc => {
        let newAcc = new Accommodation()
        newAcc.addAccommodationCard(acc, cardsDiv)
      })
    }
  }

  addAccommodationCard(acc, cardsDiv) {
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
}
