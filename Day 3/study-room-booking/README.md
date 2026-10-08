# Campus Study Room Booking System

## Description
A frontend-only web app where college students can browse study rooms, search them, submit a booking request and view their bookings. No backend or database is used; bookings are stored in the browser with localStorage.

## Problem Statement
Students need quiet rooms for group discussions, project work and study sessions, but there is no simple way to see which rooms are free and request one. This app gives a single place to find a room and book it.

## Features
- Landing page with hero, features, "How It Works" and call-to-action
- Rooms page with live, case-insensitive search by room name or building
- Room cards showing building, capacity and availability (booked rooms cannot be booked)
- Booking form with validation (required fields, at least 1 student, not above room capacity, no past dates)
- Success message with booking details after submission
- My Bookings page that reads saved bookings after a page refresh
- Responsive layout (1 / 2 / 3 columns) and mobile navigation menu

## Technologies Used
- React
- Vite
- JavaScript (JSX)
- React Router
- Tailwind CSS
- LocalStorage

## React Concepts Used
- Components (reusable: Navbar, Footer, RoomCard, SearchBar, BookingCard, FeatureCard)
- Props
- useState (search text, form data, errors, bookings, mobile menu)
- useEffect (load bookings from localStorage in My Bookings)
- Controlled Components
- Forms (onChange, onSubmit, preventDefault)
- map() with unique keys
- filter() (search and available rooms)
- Conditional rendering
- React Router (Routes, Route, Link, NavLink, useSearchParams)

## How to Run
```
npm install
npm run dev
```
Then open the URL shown in the terminal (usually http://localhost:5173).

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx       Sticky navigation with active link and mobile menu
│   ├── Footer.jsx       Footer with quick links
│   ├── RoomCard.jsx     Shows one room (receives `room` as a prop)
│   ├── SearchBar.jsx    Controlled search input (props: search, setSearch)
│   ├── BookingCard.jsx  Shows one saved booking
│   └── FeatureCard.jsx  Icon + title + description card for the Home page
├── pages/
│   ├── Home.jsx         Landing page            (/)
│   ├── Rooms.jsx        Room list + search      (/rooms)
│   ├── BookRoom.jsx     Booking form            (/book)
│   └── MyBookings.jsx   Saved bookings          (/my-bookings)
├── data/rooms.js        Mock room data
├── App.jsx              Layout and routes
├── main.jsx             App entry point with BrowserRouter
└── index.css            Tailwind directives
```

localStorage key: `studyRoomBookings`
