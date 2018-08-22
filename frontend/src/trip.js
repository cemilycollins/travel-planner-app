class Trip {
  constructor(name, start_date, end_date) {
    this.name = name
    this.start_date = start_date;
    this.end_date = end_date;
  }

static renderSideBar(trip) {
  let sideBar = document.getElementById('invertedMenu')
  let a = document.createElement('a')
  a.addEventListener('click', renderTripProfile)
  a.classList.add("active", "item")
  sideBar.appendChild(a)
  a.innerText = trip.name
  a.dataset.id = trip.id
  }

  static newTrip() {
    let tripForm = document.getElementById('new-trip-form')
    tripForm.innerHTML = ""
    tripForm.innerHTML = `<form class="ui form">
    <h4 class="ui dividing header">Create A New Trip</h4>
    <div class="field">
      <label>Name</label>
      <div class="one field">
        <div class="field">
          <input type="text" id="trip-name" placeholder="Trip Name">
        </div>
        <div class="field">
          <input type="text" id="trip-start" placeholder="Start Date">
        </div>
        <div class="field">
          <input type="text" id="trip-end" placeholder="End Date">
        </div>
        <div class="ui button" id="new-trip-button" tabindex="0">Create Trip</div>
        </form>`
        let createButton = document.getElementById('new-trip-button')
        createButton.addEventListener('click', createNewTrip)
      }

  createNewTrip() {
    console.log("working")
  }

}
