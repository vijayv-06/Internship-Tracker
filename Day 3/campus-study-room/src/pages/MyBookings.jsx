function MyBookings() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <div className="text-center mb-10">

        <p className="text-purple-600 font-semibold">
          YOUR RESERVATIONS
        </p>

        <h1 className="text-4xl font-bold text-gray-800 mt-2">
          📋 My Bookings
        </h1>

        <p className="text-gray-500 mt-3">
          View your submitted study room bookings.
        </p>

      </div>


      <div className="bg-white shadow-lg rounded-2xl p-8 text-center">

        <div className="text-5xl mb-4">
          📅
        </div>

        <h2 className="text-xl font-bold">
          No bookings yet
        </h2>

        <p className="text-gray-500 mt-2">
          Your bookings will appear here after you book a room.
        </p>

      </div>

    </div>
  );
}

export default MyBookings;