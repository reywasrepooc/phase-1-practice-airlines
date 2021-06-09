const url = "http://localhost:3000/flights"
const image = document.querySelector("img#poster")
const airline = document.querySelector("div#airline.airline")
const duration = document.querySelector("#duration")
const departureTime = document.querySelector("#departureTime")
const availableTickets = document.querySelector("#ticket-num") // (capacity - ticketsSold)

/*
FIRST DELIVERABLE:
- See the first flight's details, including its **image, airline, duration, departure time,
and available tickets** (the number of tickets left will need to be derived from the flight's
capacity and the number of tickets sold)

- Use fetch to make a GET request for the first flight's details
  - http://localhost:3000/flights/1 **We don't need iteration on this one (only one flight is being requested)
- Start adding information about the flight to the page
  - image
  - airline
  - duration
  - departure time
  - available tickets (capacity - ticketsSold)
*/

document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/flights/1")  // Use fetch to make a GET request for the first flight's details
    .then(response => response.json()) // JSONify the response
    .then(data => { // We don't need iteration on this one (only one flight is being requested)

    })
})

