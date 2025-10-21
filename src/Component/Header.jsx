import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCog } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative bg-gradient-to-r from-blue-500 to-blue-900 text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 h-20">
        {/* Logo */}
        <h1 className="font-serif italic text-2xl md:text-3xl transition transform hover:scale-110 hover:text-yellow-300 animate-fadeIn">
          Luqmaan Al Xakiim
        </h1>

        {/* Desktop links */}
        <nav className="hidden md:flex gap-10 items-center font-semibold">
          <Link className="hover:text-yellow-300 transition transform hover:scale-110 animate-slideIn" to="/">Home</Link>
          <Link className="hover:text-yellow-300 transition transform hover:scale-110 animate-slideIn" to="/about">About</Link>
          <Link className="hover:text-yellow-300 transition transform hover:scale-110 animate-slideIn" to="/customer">Admission</Link>
          <Link className="hover:text-yellow-300 transition transform hover:scale-110 animate-slideIn" to="/booking">Contact</Link>
          {/* Admin icon */}
          {/* <Link className="hover:text-yellow-300 transition transform hover:scale-110" to="/admin">
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
          "md:hidden absolute left-0 w-full h-55 bg-gradient-to-b from-blue-900 to-blue-500 text-white z-40 transform transition-all duration-500 ease-in-out " +
          (isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none")
        }
        style={{ top: "80px" }}
      >
        <ul className="flex flex-col items-center gap-6 py-6 font-semibold">
          <li onClick={() => setIsOpen(false)}><Link to="/">Home</Link></li>
          <li onClick={() => setIsOpen(false)}><Link to="/about">About</Link></li>
          <li onClick={() => setIsOpen(false)}><Link to="/customer">Admission</Link></li>
          <li onClick={() => setIsOpen(false)}><Link to="/booking">Contact</Link></li>
          <li onClick={() => setIsOpen(false)}>
            {/* <Link to="/admin"><FaUserCog className="h-5 w-5"/></Link> */}
          </li>
        </ul>
      </div>

      {/* Tailwind custom animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }

          @keyframes slideIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slideIn {
            animation: slideIn 0.8s ease-out forwards;
          }
        `}
      </style>
    </header>
  );
}

export default Header;