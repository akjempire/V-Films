import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Team", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50  px-6 md:px-16 py-4 flex items-center justify-between font-poppins shadow-sm">

      <Link to="/" onClick={() => setMenuOpen(false)}>
        <img src="/VFilm.png" alt="Logo" className="w-24 cursor-pointer" />
      </Link>

      <div className="hidden md:flex items-center gap-8 text-gray-800">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`cursor-pointer transition hover:text-orange-500 ${
              location.pathname === link.path ? "text-orange-600 font-medium" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/contact"
          className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition cursor-pointer"
        >
          Let’s Talk ✉️
        </Link>
      </div>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-gray-800 focus:outline-none text-3xl"
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {menuOpen && (
        <div className="absolute top-full right-0 mt-2 bg-[#FDD0C1] shadow-lg rounded-lg w-48 flex flex-col items-start py-4 px-6 animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block py-2 w-full text-gray-800 hover:text-orange-600 ${
                location.pathname === link.path ? "text-orange-600 font-medium" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 w-full text-center bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
          >
            Let’s Talk ✉️
          </Link>
        </div>
      )}
    </nav>
  );
}
