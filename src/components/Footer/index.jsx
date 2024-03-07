import React from "react";

function Footer() {
  return (
    <footer className="p-4 bg-dark-purple text-white text-center text-sm font-medium">
      © {new Date().getFullYear()} Time Tourists, All rights reserved.
    </footer>
  );
}

export default Footer;