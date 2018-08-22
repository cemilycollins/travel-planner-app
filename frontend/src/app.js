class App {

  fetchOneTrip(id) {
    return fetch(`http://localhost:3000/trips/${id}`)
    .then(response => response.json())
  }

  postFetchTrip(start_date, end_date, name, img_url) {
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
    }).then(r => r.json())
  }

}
