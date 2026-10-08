import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookingCard from "../components/BookingCard.jsx";

const STORAGE_KEY = "studyRoomBookings";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  // Runs once when the page loads: read saved bookings from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setBookings(saved);
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">📋 My Bookings</h1>

      {bookings.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bookings.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl bg-white p-12 text-center shadow-md">
          <div className="text-6xl">📭</div>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">No Bookings Yet</h2>
          <p className="mt-2 text-gray-600">Your submitted room bookings will appear here.</p>
          <Link
            to="/book"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 font-bold text-white transition hover:opacity-90"
          >
            Book a Room
          </Link>
        </div>
      )}
    </div>
  );
}

export default MyBookings;
