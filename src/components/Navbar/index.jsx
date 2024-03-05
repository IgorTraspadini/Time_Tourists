import React, { useState } from "react";
import { useUserContext } from "../../context/UserContext";

function Navbar() {
  const { user } = useUserContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-muted-purple p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-xl font-bold">Time Tourists</a>

        {/* Hamburger button for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="text-white hover:text-lavender focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {/* Icon for the menu button */}
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Links container, hidden on mobile and expanded on md screens and larger */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/about" className="text-white hover:text-lavender px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">About</a>
          <a href="/services" className="text-white hover:text-lavender px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">Services</a>
          <a href="/contact" className="text-white hover:text-lavender px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">Contact</a>
          {user && (
            <span className="text-white text-sm pl-4">Welcome, {user.name}</span>
          )}
        </div>

        {/* Mobile menu, displayed when isMenuOpen is true */}
        <div className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="rounded-lg shadow-md bg-muted-purple ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <a href="/" className="text-white text-xl font-bold">Time Tourists</a>
              </div>
              <div className="-mr-2">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  type="button"
                  className="bg-muted-purple rounded-md p-2 inline-flex items-center justify-center text-white hover:text-lavender focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Close main menu</span>
                  {/* Close icon */}
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-lavender">About</a>
              <a href="/services" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-lavender">Services</a>
              <a href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-lavender">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;