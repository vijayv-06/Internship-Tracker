import { Link } from "react-router-dom";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/book", label: "Book Room" },
  { to: "/my-bookings", label: "My Bookings" },
];

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:justify-between">
        <div>
          <p className="text-xl font-extrabold text-white">🎓 StudyRoom</p>
          <p className="mt-2 text-sm">Campus Study Room Booking System</p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="mb-3 font-semibold text-white">Quick Links</p>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm sm:flex sm:gap-6 md:flex-col md:gap-2">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-pink-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
