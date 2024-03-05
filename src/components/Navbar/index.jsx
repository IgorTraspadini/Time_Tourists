import React from "react";
import { useUserContext } from "../../context/UserContext";

function Navbar() {
  const { user } = useUserContext();

  return (
    <nav className="bg-dark-green p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-xl font-bold">Time Tourists</a>
        <div className="flex items-center">
          <a href="/about" className="text-white hover:text-bright-blue px-3 py-2 rounded-md text-sm font-medium">About</a>
          <a href="/services" className="text-white hover:text-bright-blue px-3 py-2 rounded-md text-sm font-medium">Services</a>
          <a href="/contact" className="text-white hover:text-bright-blue px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          {/* Display welcome message*/}
          {user && (
            <span className="ml-4 text-white text-sm">
              Welcome, {user.name}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
