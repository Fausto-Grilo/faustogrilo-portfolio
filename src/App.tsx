import LoadinScreen from './components/LoadinScreen.tsx';
import { useState } from "react";
import {Navbar} from "./components/Navbar.tsx";
import {MobileMenu} from "./components/MobileMenu.tsx";
import Home from "./components/homePage/Home.tsx";
import About from "./components/homePage/About.tsx";
import Projects from "./components/homePage/Projects.tsx";
import "./index.css"
import Contact from './components/homePage/Contact.tsx';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadinScreen onComplete={() => setIsLoaded(true)}/>}
      <div className={`min-h-screen transition-opacity duration-700  ${isLoaded ? "opacity-100" : "opacity-0"}  bg-black text-green-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </div>

    </>
  )
}

export default App

