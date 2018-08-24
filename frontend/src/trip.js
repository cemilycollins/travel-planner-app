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
  a.id = `sidebar-${trip.id}`
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
          <input type="text" id="new-trip-name" placeholder="Trip Name">
        </div>
        <label>Start Date *</label>
        <div class="field">
          <input type="text" id="new-trip-start" placeholder="MM/DD/YYYY">
        </div>
        <label>End Date *</label>
        <div class="field">
          <input type="text" id="new-trip-end" placeholder="MM/DD/YYYY">
        </div>
        <label>Image URL *</label>
        <div class="field">
          <input type="text" id="new-trip-url" placeholder="Image URL">
        </div>
        <div class="ui button" id="new-trip-button" tabindex="0">Create Trip</div>
        </form>`
    let createButton = document.getElementById('new-trip-button')
    createButton.addEventListener('click', this.makeNewTrip)
  }

  static makeNewTrip() {
    let trip = document.getElementById('new-trip-form')
    let tripName = document.getElementById('new-trip-name').value
    let tripStart = document.getElementById('new-trip-start').value
    let tripEnd = document.getElementById('new-trip-end').value
    let img_url = document.getElementById('new-trip-url').value
    App.postFetchTrip(tripStart, tripEnd, tripName, img_url)
    trip.innerHTML = ""
  }


static renderTripSegment(tripJson) {
  let container = document.getElementById('twelve')
  container.innerHTML = ""
  this.createTripSegment(tripJson.id)
  let trip_info = document.getElementById('trip-description')
  let tripDetails = document.createElement('div')
  let imgDiv = document.createElement('div')
  let img = document.createElement('img')
  let b = document.createElement('b')
  let b2 = document.createElement('b')
  let b3 = document.createElement('b')
  let p = document.createElement('p')
  let p2 = document.createElement('p')
  let p3 = document.createElement('p')
  img.className = 'location_img'
  tripDetails.classList.add("four", "wide", "column")
  imgDiv.classList.add("ten", "wide", "column")
  trip_info.append(tripDetails, imgDiv)
  tripDetails.append(b, p, b2, p2, b3, p3)
  imgDiv.appendChild(img)
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
  img.id = 'trip-img'
}

static createTripSegment(id) {
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
  div2.classList.add("ui", "grid", "trip-description")
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
  eButton.dataset.id = id
  eButton.onclick = Trip.editTrip
  let dButton = document.getElementById('delete-trip')
  dButton.dataset.id = id
  dButton.onclick = this.deleteTrip
  }

 static editTrip(event) {
   let id = event.currentTarget.dataset.id
   let changeTrip = document.getElementById('edit-trip-form')
   changeTrip.innerHTML = `<form class="ui form">
   <br>
   <h4 class="ui dividing header">Edit Trip</h4>
   <div class="field">
     <label>Name *</label>
     <div class="one field">
       <div class="field">
         <input type="text" id="edit-trip-name" placeholder="Trip Name">
       </div>
       <label>Start Date *</label>
       <div class="field">
         <input type="text" id="edit-trip-start" placeholder="MM/DD/YYYY">
       </div>
       <label>End Date *</label>
       <div class="field">
         <input type="text" id="edit-trip-end" placeholder="MM/DD/YYYY">
       </div>
       <label>Image URL *</label>
       <div class="field">
         <input type="text" id="edit-trip-url" placeholder="Image URL">
       </div>
       <div class="ui button" id="edit-trip-button" tabindex="0">Edit Trip</div>
       </form>`
       let currentName = document.getElementById('trip-name').innerText
       let currentStart = document.getElementById('trip-start').innerText
       let currentEnd = document.getElementById('trip-end').innerText
       let currentImg = document.getElementById('trip-img').src
       document.getElementById('edit-trip-name').value = currentName
       document.getElementById('edit-trip-start').value = currentStart
       document.getElementById('edit-trip-end').value = currentEnd
       document.getElementById('edit-trip-url').value = currentImg
       debugger
       let editTripForm = document.getElementById('edit-trip-button')
       editTripForm.dataset.id = id
       editTripForm.addEventListener('click', App.tripEditPatch)
  }
  static deleteTrip(event) {
    let id = event.currentTarget.dataset.id
    fetch(`http://localhost:3000/trips/${id}`, {
    method: "DELETE"
  })
  .then(response => response.json())
  .then(json => {
    let tripInfo = document.getElementById('twelve')
    let sideInfo = document.getElementById('invertedMenu')
    tripInfo.innerHTML = ""
    let sideTrip = document.querySelector(`#sidebar-${id}`)
    sideInfo.removeChild(sideTrip)
    })
  }
}
