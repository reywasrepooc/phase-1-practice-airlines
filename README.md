# Introduction

Welcome to our flight ticketing app! You will be building out an application that allows a user to purchase flight tickets from an airline.

## Setup

- Fork and clone this repository.
- Open `index.html` in your browser.
- Run `json-server --watch db.json` to start the backend.

## Endpoints

Your base URL for your API will be: http://localhost:3000

The endpoints you will need are:

- GET `/flights/[:id]` (start with `/flights/1`)
- PATCH `/flights/[:id]`

## Core Deliverables

As a user, I can:

- See the first flight's details, including its **image, airline, duration, departure time, and available tickets** (the number of tickets left will need to be derived from the flight's capacity and the number of tickets sold)
- Buy a ticket for a flight. The number of tickets sold for that flight should be persisted, and I should be able to see the number of available tickets decreasing on the frontend.
- I should not be able to buy a ticket if the flight is sold out.
