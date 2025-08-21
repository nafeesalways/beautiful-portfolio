import { useState } from "react";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Skills from "./components/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import Manage from "./components/Manage";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {!isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(true)}></LoadingScreen>
      )}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoading ? "opacity-100" : "opacity-9"
        } bg-black text-gray-200`}
      >
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <Manage></Manage>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
