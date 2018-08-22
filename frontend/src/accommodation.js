class Accommodation {

  constructor() {

  }

  static createAccommodationSegment(tripJson) {
    let segmentDiv = createSegment("Accommodations")
    segmentDiv.querySelector('.button').dataset.id = tripJson.id
    segmentDiv.querySelector('.button').addEventListener('click', Accommodation.renderNewAccForm)
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

  static renderNewAccForm(e) {
    let form = e.currentTarget.parentNode.querySelector('#form')
    form.innerHTML = ""
    form.innerHTML = `<form class="ui form">
    <h4 class="ui dividing header">Create A New Accommodation</h4>
    <div class="field">
      <div class="one field">
        <div class="field">
          <input type="text" id="city" placeholder="City">
        </div>
        <div class="field">
          <input type="text" id="start" placeholder="Start Date">
        </div>
        <div class="field">
          <input type="text" id="end" placeholder="End Date">
        </div>
        <div class="field">
          <input type="text" id="address" placeholder="Address">
        </div>
        <div class="field">
          <input type="text" id="relevant-info" placeholder="Other Relevant Info">
        </div>
        <div class="ui button" id="submit" tabindex="0">Submit</div>
        </form>`
        let createButton = document.getElementById('submit')
        createButton.addEventListener('click', createNewAccommodation)
  }

}
