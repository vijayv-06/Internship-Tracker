import { Link } from "react-router-dom";
import FeatureCard from "../components/FeatureCard.jsx";

const features = [
  { id: 1, icon: "📚", title: "Available Rooms", description: "View available study rooms and their details." },
  { id: 2, icon: "🔍", title: "Easy Search", description: "Search rooms by name or building." },
  { id: 3, icon: "📅", title: "Quick Booking", description: "Submit a room booking request easily." },
  { id: 4, icon: "👥", title: "Group Study", description: "Find rooms suitable for your study group." },
];

const steps = [
  { id: 1, icon: "🔍", title: "Find a Room", description: "Search for a suitable study room." },
  { id: 2, icon: "📝", title: "Book the Room", description: "Fill in the booking form and submit it." },
  { id: 3, icon: "🎓", title: "Start Studying", description: "Use the room for your study session." },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 text-white">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-28">
          <p className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-semibold">
            🎓 CAMPUS STUDY ROOM BOOKING
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Find the Perfect Study Room
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
            Find available study rooms for group discussions, project work and study sessions.
          </p>
          <Link
            to="/rooms"
            className="mt-10 inline-block rounded-full bg-white px-8 py-3 text-lg font-bold text-purple-700 shadow-lg transition hover:bg-purple-50"
          >
            Explore Rooms →
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Everything You Need</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <FeatureCard key={f.id} icon={f.icon} title={f.title} description={f.description} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">How It Works</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.id} className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-4xl shadow-md">
                  {s.icon}
                </div>
                <p className="mt-2 text-sm font-semibold text-purple-700">Step {s.id}</p>
                <h3 className="mt-1 text-xl font-bold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 px-6 py-14 text-center text-white shadow-xl">
          <h2 className="text-3xl font-extrabold">Ready to Book a Study Room?</h2>
          <p className="mt-3 text-lg text-white/90">Explore the available rooms on campus.</p>
          <Link
            to="/rooms"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-bold text-purple-700 transition hover:bg-purple-50"
          >
            View Rooms
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
