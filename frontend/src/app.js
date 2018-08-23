class App {

static fetchOneTrip(id) {
    return fetch(`http://localhost:3000/trips/${id}`)
    .then(response => response.json())
  }

static postFetchTrip(start_date, end_date, name, img_url) {
    return fetch(`http://localhost:3000/trips/`, {
      method: "POST",
      body: JSON.stringify({
        start_date: start_date,
        end_date: end_date,
        name: name,
        img_url: img_url
      }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(response => response.json())
    .then(json => {
      Trip.renderSideBar(json)
      renderTripProfile(json)
  })
  let tripForm = document.getElementById('new-trip-form')
  tripForm.innerHTML = ""
}

static postFetchAcc(city, start_date, end_date, address, relevant_info, trip_id) {
  fetch(`http://localhost:3000/accommodations/`, {
    method: "POST",
    body: JSON.stringify({
      start_date: start_date,
      end_date: end_date,
      city: city,
      address: address,
      relevant_info: relevant_info,
      trip_id: trip_id
    }),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }).then(response => response.json())
  .then(json => {
    let cardsDivs = document.querySelectorAll('.cards')
    Accommodation.addAccommodationCard(json, cardsDivs[0])
    cardsDivs[0].parentNode.querySelector('#form').innerHTML = ""
  })
}

}
