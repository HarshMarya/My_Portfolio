import React from "react";
import heroImg from "../assets/hero-img.svg";
import { FaCodepen  } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import "../common.css"

function Main() {
  return (
    <>
      <main className="flex flex-col lg:flex-row justify-around w-full items-center p-6 md:p-10">
        <div className="lg:mx-auto items-center h-full p-4 lg:p-0 text-center lg:text-start">
          <h1 className="text-3xl md:text-5xl mb-4 lg:mb-6">Hello I'm <span className="font-bold text-5xl md:text-6xl">Harsh Maurya.</span></h1>
          <h2 className="text-3xl md:text-5xl mb-4 lg:mb-6"><span className="font-bold text-4xl md:text-5xl">Frontend </span>Developer</h2>
          <h2 className="text-3xl">& <span className="font-bold text-4xl">UI Designer</span></h2>
          <div className="text-lg lg:text-xl my-4 lg:my-6">
            <p className="dark:text-yellow-400 bg-base-100">
            A Frontend focused Web Developer building the Frontend of Websites 
            </p>
            <p>and Web Applications that leads to the success</p>
            <p> of the overall product.</p>
            
            {/* Social */}
            <div className="social-card lg:justify-start">
              <a href="https://codepen.io/Harsh-Maurya-the-decoder/pens/public" target="_blank" className="socialContainer containerOne">
                <FaCodepen  />
              </a>

              <a href="/" className="socialContainer containerTwo">
                <FaInstagram />
              </a>

              <a href="https://www.linkedin.com/in/harsh-maurya-552161293" target="_blank" className="socialContainer containerThree">
                <FaLinkedinIn />
              </a>

              <a href="https://github.com/HarshMarya" target="_blank" className="socialContainer containerFour">
                <FiGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto items-center h-full p-4 lg:p-0">
          <img src={heroImg} className="w-[400px] lg:w-full" />
        </div>
      </main>
    </>
  );
}

export default Main;
