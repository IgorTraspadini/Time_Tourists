import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedGlobe from '../src/components/AnimatedGlobe/index.jsx';
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";
import History from "./components/pages/History";
import UserSelectForm from "./components/pages/UserSelectForm";
import UserContextProvider from "./context/UserContext";
import ChatChatComponent from "../src/components/Chatgpt_API/index.jsx";

function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <main className="flex column-reverse md:row">
        <AnimatedGlobe />
        <ChatChatComponent where="China" when="Spring" interested="Music"/>
        <Routes>
          <Route index element={<SignIn />} />
          <Route path="history" element={<History />} />
          <Route path="select-history" element={<UserSelectForm />} />
        </Routes>
      </main>
      <Footer />
    </UserContextProvider>
  );
}

export default App;
