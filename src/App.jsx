import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Navbar from "./components/Navbar";
import AnimatedGlobe from '../src/components/AnimatedGlobe/index.jsx';
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";
import History from "./components/pages/History";
import UserSelectForm from "./components/pages/UserSelectForm";
import UserContextProvider from "./context/UserContext";


function App() {
  return (
    <React.StrictMode>
    <BrowserRouter>
    <UserContextProvider>
      <Navbar />
      <main className="flex flex-col-reverse md:flex-row">
        <Routes>
          <Route index element={<SignIn />} />
          <Route path="history" element={<History />} />
          <Route path="select-history" element={<UserSelectForm />} />
        </Routes>
      </main>
      <Footer />
    </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
  );
}

export default App;
