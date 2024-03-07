import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import AnimatedGlobe from "../src/components/AnimatedGlobe/index.jsx";
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";
import Search from "./components/pages/Search";
import History from "./components/pages/History";
import About from "./components/pages/about.jsx";
import UserSelectForm from "./components/pages/UserSelectForm";
import UserContextProvider from "./context/UserContext";
import Sources from "./components/pages/sources.jsx";
import Contact from "./components/pages/contact.jsx";

function App() {
  const AnimatedGlobeRoutes = ["/", "/select-history", "/search"];
  const { pathname } = useLocation();
  console.log(useLocation());
  return (
    <UserContextProvider>
      <Navbar />
      <main className="flex flex-col-reverse md:flex-row">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="history" element={<History />} />
          <Route path="search" element={<Search />} />            
          <Route path="select-history" element={<UserSelectForm />} />
          <Route path="about" element={<About />} />
          <Route path="sources" element={<Sources />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        {AnimatedGlobeRoutes.includes(pathname) && <AnimatedGlobe />}
      </main>

     <Footer />
    </UserContextProvider>
  );
}

export default App;
