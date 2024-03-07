import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Navbar from "./components/Navbar";
import AnimatedGlobe from '../src/components/AnimatedGlobe/index.jsx';
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";
import Search from "./components/pages/Search";
import History from "./components/pages/History";
import About from "./components/pages/about.jsx"
import UserSelectForm from "./components/pages/UserSelectForm";
import UserContextProvider from "./context/UserContext";


function App() {
  const path = window.location.pathname

  if (path == "/" || path == "select-history") {
    return (
      <BrowserRouter>
        <UserContextProvider>
          <Navbar />
          <main className="flex flex-col-reverse md:flex-row">
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="history" element={<History />} />
              <Route path="search" element={<Search />} />
              <Route path="select-history" element={<UserSelectForm />} />
              <Route path="about" element={<About />} />
            </Routes>
            <AnimatedGlobe />

          </main>

          <Footer />
        </UserContextProvider>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <UserContextProvider>
          <Navbar />
          <main className="flex flex-col-reverse md:flex-row">
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="history" element={<History />} />
              <Route path="search" element={<Search />} />
              <Route path="select-history" element={<UserSelectForm />} />
              <Route path="about" element={<About />} />
            </Routes>


          </main>

          <Footer />
        </UserContextProvider>
      </BrowserRouter>
    )
  }
}

export default App;
