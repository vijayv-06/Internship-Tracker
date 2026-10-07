import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <p className="font-semibold mb-4">
            🎓 CAMPUS STUDY ROOM BOOKING
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Find the Perfect
            <br />
            Study Room
          </h1>

          <p className="text-lg max-w-2xl mb-8">
            Find available study rooms for group discussions,
            project work and study sessions.
          </p>

          <Link
            to="/rooms"
            className="inline-block bg-white text-purple-700 px-6 py-3 rounded-xl font-bold"
          >
            Explore Rooms →
          </Link>

        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-center mb-10">
          Everything You Need
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="text-4xl mb-4">📚</div>

            <h3 className="text-xl font-bold mb-2">
              Available Rooms
            </h3>

            <p className="text-gray-600">
              View available study rooms and their details.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="text-4xl mb-4">🔍</div>

            <h3 className="text-xl font-bold mb-2">
              Easy Search
            </h3>

            <p className="text-gray-600">
              Search rooms by name or building.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="text-4xl mb-4">📅</div>

            <h3 className="text-xl font-bold mb-2">
              Quick Booking
            </h3>

            <p className="text-gray-600">
              Submit a room booking request easily.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;