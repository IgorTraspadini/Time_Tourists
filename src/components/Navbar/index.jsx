import React from "react";
import { useUserContext } from "../../context/UserContext";

function Navbar() {
  const { user } = useUserContext();
  console.log(user);
  return <nav className="bg-slate-300 p-4">Navbar</nav>;
}

export default Navbar;
