import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/book", label: "Book Room" },
  { to: "/my-bookings", label: "My Bookings" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  // NavLink gives us isActive so we can highlight the current page
  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition ${
      isActive
        ? "bg-purple-100 text-purple-700"
        : "text-gray-600 hover:bg-gray-100 hover:text-purple-700"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6"
        aria-label="Main navigation"
      >
        <Link to="/" className="text-xl font-extrabold text-purple-700">
          🎓 StudyRoom
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-2xl text-purple-700 hover:bg-purple-50 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col gap-1 border-t border-gray-100 bg-white px-4 pb-4 pt-2 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
