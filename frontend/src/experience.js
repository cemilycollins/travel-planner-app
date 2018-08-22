class Experience {

  static createExperienceSegment(tripJson) {
    let segmentDiv = createSegment("Experiences")
    segmentDiv.querySelector('.button').dataset.id = tripJson.id
    // segmentDiv.querySelector('.button').addEventListener('click', renderNewTicketForm)
    let cardsDiv = segmentDiv.querySelector('.cards')
    if (tripJson.experiences.length > 0) {
      tripJson.experiences.forEach(x => {
        let exp = new Experience()
        exp.addExperienceCard(x, cardsDiv)
      })
    }
  }


  addExperienceCard(exp, cardsDiv) {
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
}
