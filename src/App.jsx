import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedGlobe from "./components/AnimatedGlobe";
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";
import History from "./components/pages/History";
import UserSelectForm from "./components/pages/UserSelectForm";
import UserContextProvider from "./context/UserContext";
import ChatChatComponent from "./components/Chatgpt_API";

function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <main className="flex column-reverse md:row">
        <AnimatedGlobe />
        <ChatChatComponent/>
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
