import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedGlobe from "./components/AnimatedGlobe";
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";
import History from "./components/pages/History";
import UserSelectForm from "./components/pages/UserSelectForm";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <AnimatedGlobe />
        <Routes>
          <Route index element={<SignIn />} />
          <Route path="history" element={<History />} />
          <Route path="select-history"  element={<UserSelectForm />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
