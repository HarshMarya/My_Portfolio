import React, {useState} from "react";
import Main from "./Components/Main";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="font-playfair">
      <Navbar />
      <Main />
      <Skills />
      <Experience />
      <AboutMe />
      <Projects />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
