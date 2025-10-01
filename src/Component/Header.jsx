import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCog } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative bg-white text-blue-600 -md z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-9 py-4 h-20">
        {/* Logo */}
        <h1 className="font-bold text-2xl md:text-3xl transition transform hover:scale-105">
          Luqmaan Al Xakiim
        </h1>

        {/* Desktop links */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link className="hover:scale-110 transition" to="/">Home</Link>
          <Link className="hover:scale-110 transition" to="/About">About</Link>
          <Link className="hover:scale-110 transition" to="/Customer">Customer</Link>
          <Link className="hover:scale-110 transition" to="/Booking">Contact</Link>
          {/* <Link className="hover:scale-110 transition" to="/Admin">
            <FaUserCog className="h-5 w-5"/>
          </Link> */}
        </nav>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={
          "md:hidden absolute left-0 w-full bg-white text-blue-600 z-50 transform transition-all duration-500 ease-in-out " +
          (isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none")
        }
        style={{ top: "80px" }}
      >
        <ul className="flex flex-col items-center gap-6 py-6">
          <li onClick={() => setIsOpen(false)}><Link to="/">Home</Link></li>
          <li onClick={() => setIsOpen(false)}><Link to="/About">About</Link></li>
          <li onClick={() => setIsOpen(false)}><Link to="/Customer">Customer</Link></li>
            <li onClick={() => setIsOpen(false)}><Link to="/Booking">Contact</Link></li>
          <li onClick={() => setIsOpen(false)}>
            {/* <Link to="/Admin">
              <FaUserCog className="h-5 w-5"/>
            </Link> */}
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
