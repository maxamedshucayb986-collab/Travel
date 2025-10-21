import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Admission", to: "/customer" },
    { name: "Contact", to: "/booking" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-blue-900 shadow-xl" : "bg-gradient-to-r from-blue-500 to-blue-900 shadow-lg"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 h-20">
        {/* Logo */}
        <h1 className="font-serif italic text-2xl md:text-3xl transition transform hover:scale-110 text-white hover:text-yellow-300 animate-fadeIn">
          Luqmaan Al Xakiim
        </h1>

        {/* Desktop links */}
        <nav className="hidden md:flex gap-10 items-center font-semibold">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative hover:text-yellow-300 transition transform text-white hover:scale-110 animate-slideIn ${
                location.pathname === link.to ? "text-yellow-300" : ""
              }`}
            >
              {link.name}
              <span className={`absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-300 transition-all duration-300 ${location.pathname === link.to ? "scale-x-100" : "scale-x-0"} transform origin-left hover:scale-x-100`}></span>
            </Link>
          ))}
        </nav>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden p-2 focus:outline-none text-white"
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
          "md:hidden absolute left-0 w-full bg-gradient-to-b from-blue-900 to-blue-500 text-white z-40 transform transition-all duration-500 ease-in-out " +
          (isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none")
        }
        style={{ top: "80px" }}
      >
        <ul className="flex flex-col items-center gap-6 py-6 font-semibold">
          {links.map(link => (
            <li key={link.to} onClick={() => setIsOpen(false)}>
              <Link to={link.to}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>

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
