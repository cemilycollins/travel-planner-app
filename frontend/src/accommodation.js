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
        Accommodation.addAccommodationCard(acc, cardsDiv)
      })
      Accommodation.accCardEventListeners()
    }
  }

  static accCardEventListeners() {
    document.querySelectorAll('#edit-accommodation').forEach(editButton => {
      editButton.addEventListener('click', Accommodation.renderEditForm)
    })
    document.querySelectorAll('#delete-accommodation').forEach(deleteButton => {
      deleteButton.addEventListener('click', Accommodation.deleteAcc)
    })
  }

  static addAccommodationCard(acc, cardsDiv) {
    cardsDiv.innerHTML += `<div class='card' data-id=${acc.id} id="acc-${acc.id}">
      ${Accommodation.renderCard(acc)}
    </div>`
  }

  static renderCard(acc) {
    return `<div class='content'>
      <div class='header' id='name'>${acc.city}</div>
      <div class='meta' id='start-end-dates'>${acc.start_date} - ${acc.end_date}</div>
      <div class='description'>
        <b id='address'>Address: ${acc.address}</b>
        <p id='relevant-info'>${acc.relevant_info}</p>
      </div>
    </div>
    <div class='extra content'>
      <div class='ui two buttons'>
        <div class='ui basic blue button' id='edit-accommodation' data-id=${acc.id}>Edit</div>
        <div class='ui basic red button' id='delete-accommodation' data-id=${acc.id}>Delete</div>
      </div>
    </div>`
  }

  static renderEditForm(e) {
    let id = e.currentTarget.dataset.id
    let acc
    let form = e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('#form')
    App.fetchOneAcc(id).then(json => {
      acc = json
    form.innerHTML = `<form class="ui form">
    <br>
    <h4 class="ui dividing header">Edit This Accommodation</h4>
    <div class="field">
      <div class="one field">
        <label>City *</label>
        <div class="field">
          <input type="text" id="city" value="${acc.city}">
        </div>
        <label>Start Date *</label>
        <div class="field">
          <input type="text" id="start" value="${acc.start_date}">
        </div>
        <label>End Date *</label>
        <div class="field">
          <input type="text" id="end" value="${acc.end_date}">
        </div>
        <label>Address *</label>
        <div class="field">
          <input type="text" id="address" value="${acc.address}">
        </div>
        <label>Other Relevant Info</label>
        <div class="field">
          <input type="text" id="relevant-info" value="${acc.relevant_info}">
        </div>
        <div class="ui button" id="submit-edit-acc" data-id="${acc.id}" tabindex="0">Submit</div>
        </form>`

        let createButton = document.getElementById('submit-edit-acc')
        createButton.addEventListener('click', Accommodation.updateAccommodation)
    })
  }

  static deleteAcc(e) {
    let id = e.currentTarget.dataset.id
    
  }

  static renderNewAccForm(e) {
    let form = e.currentTarget.parentNode.querySelector('#form')
    let id = e.currentTarget.dataset.id
    form.innerHTML = ""
    form.innerHTML = `<form class="ui form">
    <br>
    <h4 class="ui dividing header">Create A New Accommodation</h4>
    <div class="field">
      <div class="one field">
        <label>City *</label>
        <div class="field">
          <input type="text" id="city" placeholder="City">
        </div>
        <label>Start Date *</label>
        <div class="field">
          <input type="text" id="start" placeholder="MM/DD/YYY">
        </div>
        <label>End Date *</label>
        <div class="field">
          <input type="text" id="end" placeholder="MM/DD/YYY">
        </div>
        <label>Address *</label>
        <div class="field">
          <input type="text" id="address" placeholder="Address">
        </div>
        <label>Other Relevant Info</label>
        <div class="field">
          <input type="text" id="relevant-info" placeholder="Other Info">
        </div>
        <div class="ui button" id="submit" data-id="${id}" tabindex="0">Submit</div>
        </form>`

        let createButton = document.getElementById('submit')
        createButton.addEventListener('click', Accommodation.createNewAccommodation)
  }

  static createNewAccommodation(e) {
    let tripid = e.currentTarget.dataset.id
    let formInputs = e.currentTarget.parentNode.querySelectorAll('input')
    App.postFetchAcc(formInputs[0].value, formInputs[1].value, formInputs[2].value, formInputs[3].value, formInputs[4].value, tripid)
  }

  static updateAccommodation(e) {
    let id = e.currentTarget.dataset.id
    let formInputs = e.currentTarget.parentNode.querySelectorAll('input')
    let cards = e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll('.card')
    let formDiv = e.currentTarget.parentNode.parentNode.parentNode.parentNode
    App.patchFetchAcc(id, formInputs[0].value, formInputs[1].value, formInputs[2].value, formInputs[3].value, formInputs[4].value).then(json => {
      cards.forEach(card => {
        if (card.dataset.id == id) {
          card.innerHTML = Accommodation.renderCard(json)
          card.querySelector('#edit-accommodation').addEventListener('click', Accommodation.renderEditForm)
          card.querySelector('#delete-accommodation').addEventListener('click', Accommodation.deleteAccommodation)
        }
      })
      formDiv.innerHTML = ""
    })
  }

}
