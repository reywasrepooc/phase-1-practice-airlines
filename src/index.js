
/*
first deliverable
    - show the first flights details on the loading of the page
    - include 
        -image
        -airline
        -duration
        -departuretime
        - number of available tickets = (flight capacity - number sold)

*/
document.addEventListener('DOMContentLoaded', () => {
  const flightImage = document.querySelector('img#poster')
  const flightAirline = document.querySelector('div#airline.airline')
  const flightDuration = document.querySelector('div#duration.meta')
  const flightDestination = document.querySelector('div#destination')
  const flightDepartureTime = document.querySelector('span#departureTime')
  const numberOfTicketsLeft = document.querySelector('span#ticket-num')

  const url = 'http://localhost:3000/flights/1'

  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      flightImage.src = data.image
      flightAirline.innerHTML = data.airline
      flightDuration.innerHTML = `${data.duration} minutes`
      flightDestination.innerHTML = data.destination
      flightDepartureTime.innerHTML = data.departureTime
      numberOfTicketsLeft.innerHTML = data.capacity - data.ticketsSold
      numberOfTicketsLeft.dataset.ticketsSold = data.ticketsSold
    })
  const buyButton = document.querySelector('div.ui.orange.button')
  buyButton.addEventListener('click', () => {
    const newNumberOfTickets = parseInt(numberOfTicketsLeft.dataset.ticketsSold) + 1
    if (numberOfTicketsLeft.innerHTML >= 1) {
    const formData = {
      ticketsSold: newNumberOfTickets
    }
    const configurationObject = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    }
      fetch(url, configurationObject)
      .then(response => response.json())
      .then(data => {
        numberOfTicketsLeft.dataset.ticketsSold = data.ticketsSold
        numberOfTicketsLeft.innerHTML = data.capacity - data.ticketsSold
      })
    } else { buyButton.innerText = 'SOLD OUT'}
  })
})
