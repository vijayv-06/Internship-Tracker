import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-purple-700 text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold">
          🎓 StudyRoom
        </Link>

        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/rooms">Rooms</Link>
          <Link to="/book">Book Room</Link>
          <Link to="/my-bookings">My Bookings</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;