class Experience {

  static createExperienceSegment(tripJson) {
    let segmentDiv = createSegment("Experiences")
    segmentDiv.querySelector('.button').dataset.id = tripJson.id
    segmentDiv.querySelector('.button').addEventListener('click', Experience.renderNewExpForm)
    let cardsDiv = segmentDiv.querySelector('.cards')
    if (tripJson.experiences.length > 0) {
      tripJson.experiences.forEach(x => {
        Experience.addExperienceCard(x, cardsDiv)
      })
    }
  }


  static addExperienceCard(exp, cardsDiv) {
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

  static renderNewExpForm(e) {
    let form = e.currentTarget.parentNode.querySelector('#form')
    let id = e.currentTarget.dataset.id
    form.innerHTML = ""
    form.innerHTML = `<form class="ui form">
    <br>
    <h4 class="ui dividing header">New Experience</h4>
    <div class="field">
      <div class="one field">
        <label>Name *</label>
        <div class="field">
          <input type="text" id="name" placeholder="Experience Name">
        </div>
        <label>Date *</label>
        <div class="field">
          <input type="text" id="date" placeholder="MM/DD/YYY">
        </div>
        <label>City *</label>
        <div class="field">
          <input type="text" id="city" placeholder="City">
        </div>
        <label>Address *</label>
        <div class="field">
          <input type="text" id="address" placeholder="Address">
        </div>
        <label>Other Relevant Info</label>
        <div class="field">
          <input type="text" id="relevant-info" placeholder="Other Info">
        </div>
        <div class="ui button" id="new-experience-submit" data-id="${id}" tabindex="0">Submit</div>
        </form>`

        let createButton = document.getElementById('new-experience-submit')
        createButton.addEventListener('click', Experience.createNewExperience)
  }

  static createNewExperience(e) {
    let tripid = e.currentTarget.dataset.id
    let formInputs = e.currentTarget.parentNode.querySelectorAll('input')
    App.postFetchExp(formInputs[0].value, formInputs[1].value, formInputs[2].value, formInputs[3].value, formInputs[4].value, tripid)
  }
}
