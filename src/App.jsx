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

// function App() {
//   const AnimatedGlobeRoutes = ["/", "/select-history", "/search"];
//   const { pathname } = useLocation();

//   return (
//     <UserContextProvider>
//       <div className="flex flex-col min-h-screen">
//         <Navbar />
//         <main className="flex flex-1">
//           <Routes>
//             <Route path="/" element={<SignIn />} />
//             <Route path="history" element={<History />} />
//             <Route path="search" element={<Search />} />
//             <Route path="select-history" element={<UserSelectForm />} />
//             <Route path="about" element={<About />} />
//             <Route path="contact" element={<Contact />} />
//           </Routes>
//           {AnimatedGlobeRoutes.includes(pathname) && <AnimatedGlobe />}
//         </main>
//         <Footer />
//       </div>
//     </UserContextProvider>
//   );
// }

// export default App;

// -------------------------------------------------------------

// function App() {
//   const AnimatedGlobeRoutes = ["/", "/select-history", "/search"];
//   const { pathname } = useLocation();

//   return (
//     <UserContextProvider>
//       <div className="flex flex-col min-h-screen bg-black">
//         <Navbar />
//         {/* Create a flex container that changes direction based on screen size */}
//         <main className="flex-1 flex flex-col md:flex-row">
//           {/* Your Routes will be rendered here and take full width on small screens */}
//           <div className="flex-1">
//             <Routes>
//               <Route path="/" element={<SignIn />} />
//               <Route path="history" element={<History />} />
//               <Route path="search" element={<Search />} />
//               <Route path="select-history" element={<UserSelectForm />} />
//               <Route path="about" element={<About />} />
//               <Route path="contact" element={<Contact />} />
//             </Routes>
//           </div>
//           {/* AnimatedGlobe will be rendered here and sit at the bottom on small screens */}
//           {AnimatedGlobeRoutes.includes(pathname) && (
//             <div className="flex-1 md:mt-0 mt-4">
//               <AnimatedGlobe />
//             </div>
//           )}
//         </main>
//         <Footer />
//       </div>
//     </UserContextProvider>
//   );
// }

// -------------------------------------------------------------

// function App() {
//   const AnimatedGlobeRoutes = ["/", "/select-history", "/search"];
//   const { pathname } = useLocation();

//   return (
//     <UserContextProvider>
//       <div className="flex flex-col min-h-screen bg-black">
//         <Navbar />
//         {/* Main content area */}
//         <main className="flex flex-col md:flex-row flex-1">
//           {/* Routes container, full width on mobile, half on desktop */}
//           <div className="w-full md:w-1/2">
//             <Routes>
//               <Route path="/" element={<SignIn />} />
//               <Route path="history" element={<History />} />
//               <Route path="search" element={<Search />} />
//               <Route path="select-history" element={<UserSelectForm />} />
//               <Route path="about" element={<About />} />
//               <Route path="contact" element={<Contact />} />
//             </Routes>
//           </div>
//           {/* AnimatedGlobe container, full width on mobile, half on desktop */}
//           {AnimatedGlobeRoutes.includes(pathname) && (
//             <div className="w-full md:w-1/2 md:flex md:justify-end">
//               <AnimatedGlobe />
//             </div>
//           )}
//         </main>
//         <Footer />
//       </div>
//     </UserContextProvider>
//   );
// }

// ------------------------------------------------------

function App() {
  const AnimatedGlobeRoutes = ["/", "/select-history", "/search"];
  const { pathname } = useLocation();
  return (
    <UserContextProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* Use 'flex-col' for mobile and 'flex-row' for larger screens */}
        <main className="flex-1 flex flex-col md:flex-row">
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="history" element={<History />} />
            <Route path="search" element={<Search />} />
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