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
import Contact from "./components/pages/contact.jsx";

function App() {
  const AnimatedGlobeRoutes = ["/", "/select-history", "/search"];
  const { pathname } = useLocation();

  return (
    <UserContextProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex flex-1">
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="history" element={<History />} />
            <Route path="select-history" element={<UserSelectForm />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
          {AnimatedGlobeRoutes.includes(pathname) && <AnimatedGlobe />}
        </main>
        <Footer />
      </div>
    </UserContextProvider>
  );
}

export default App;
