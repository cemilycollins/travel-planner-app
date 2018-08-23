class Trip {
  constructor(name, start_date, end_date, img_url) {
    this.name = name;
    this.start_date = start_date;
    this.end_date = end_date;
    this.img_url = img_url;
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
      <label>Name *</label>
      <div class="one field">
        <div class="field">
          <input type="text" id="trip-name" placeholder="Trip Name">
        </div>
        <label>Start Date *</label>
        <div class="field">
          <input type="text" id="trip-start" placeholder="MM/DD/YYYY">
        </div>
        <label>End Date *</label>
        <div class="field">
          <input type="text" id="trip-end" placeholder="MM/DD/YYYY">
        </div>
        <label>Image URL *</label>
        <div class="field">
          <input type="text" id="trip-url" placeholder="Image URL">
        </div>
        <div class="ui button" id="new-trip-button" tabindex="0">Create Trip</div>
        </form>`
    let createButton = document.getElementById('new-trip-button')
    createButton.addEventListener('click', this.makeNewTrip)
  }

  static makeNewTrip() {
    let tripName = document.getElementById('trip-name').value
    let tripStart = document.getElementById('trip-start').value
    let tripEnd = document.getElementById('trip-end').value
    let img_url = document.getElementById('trip-url').value
    App.postFetchTrip(tripStart, tripEnd, tripName, img_url)
  }


static renderTripSegment(tripJson) {
  let container = document.getElementById('twelve')
  container.innerHTML = ""
  this.createTripSegment()
  let trip_info = document.getElementById('trip-description')
  let img = document.createElement('img')
  let b = document.createElement('b')
  let b2 = document.createElement('b')
  let b3 = document.createElement('b')
  let p = document.createElement('p')
  let p2 = document.createElement('p')
  let p3 = document.createElement('p')

  trip_info.append(b, p, b2, p2, b3, p3, img)
  b.innerText = 'Trip Name:'
  b2.innerText = 'Start Date:'
  b3.innerText = 'End Date:'
  p.innerText = tripJson.name
  p2.innerText = tripJson.start_date
  p3.innerText = tripJson.end_date
  img.src = tripJson.img_url
  p.id = 'trip-name'
  p2.id = 'trip-start'
  p3.id = 'trip-end'
}

static createTripSegment() {
  let segmentsDiv = document.querySelector('.twelve')
  let div = document.createElement('div')
  let div1 = document.createElement('div')
  let div2 = document.createElement('div')
  let div3 = document.createElement('div')
  let div4 = document.createElement('div')
  let div5 = document.createElement('div')
  let div6 = document.createElement('div')

  segmentsDiv.appendChild(div)
  div.append(div1, div2, div3,)
  div2.appendChild(div6)
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
  div6.id = "edit-trip-form"
  div1.innerText = "Trip Information"
  div4.innerText = "Edit"
  div5.innerText = "Delete"

  let eButton = document.getElementById('edit-trip')
  eButton.onclick = this.editTrip
  }

 static editTrip(event) {
   let changeTrip = document.getElementById('edit-trip-form')
   changeTrip.innerHTML = `<form class="ui form">
   <h4 class="ui dividing header">Edit Trip</h4>
   <div class="field">
     <label>Name *</label>
     <div class="one field">
       <div class="field">
         <input type="text" id="trip-name" placeholder="Trip Name">
       </div>
       <label>Start Date *</label>
       <div class="field">
         <input type="text" id="trip-start" placeholder="MM/DD/YYYY">
       </div>
       <label>End Date *</label>
       <div class="field">
         <input type="text" id="trip-end" placeholder="MM/DD/YYYY">
       </div>
       <label>Image URL *</label>
       <div class="field">
         <input type="text" id="trip-url" placeholder="Image URL">
       </div>
       <div class="ui button" id="new-trip-button" tabindex="0">Edit Trip</div>
       </form>`
  }

}
