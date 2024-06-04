import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { AiOutlineDownload } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLargeFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { Link } from "react-scroll";


const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    trasnsition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="font-playfair">
      <nav className="flex justify-between items-center px-10 py-2">
        <div>
          <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
            <img src={logo} className="w-[60px]" />
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex justify-between gap-10 font-semibold uppercase">
            <li className="hover:border-b-2  hover:border-b-black cursor-pointer transition-all">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="hover:border-b-2  hover:border-b-black cursor-pointer transition-all">
              <Link
                to="about-me"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                About Me
              </Link>
            </li>
            <li className="hover:border-b-2  hover:border-b-black cursor-pointer transition-all">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                Projects
              </Link>
            </li>
            <li className="hover:border-b-2  hover:border-b-black cursor-pointer transition-all dark:text-white">
              <Link
                to="contact-me"
                spy={true}
                smooth={true}
                offset={50}
                duration={1500}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:flex gap-10 hidden">
          <div className="bg-black text-white p-3 hover:scale-105 transition-all md:flex items-center gap-2  hidden">
          <button>Resume </button>
          <AiOutlineDownload />
          </div>
          

        </div>
        <div className="md:hidden flex" onClick={() => setOpenMenu(true)}>
          <AiOutlineBars className="text-5xl cursor-pointer bg-black text-white p-2 rounded-full" />

        </div>
      </nav>
      <motion.div
        variants={menuVariants}
        intital="hidden"
        animate={openMenu ? "show" : "hidden"}
        className="bg-black/50 backdrop-blur-sm w-screen h-full fixed top-0 right-0 flex md:hidden z-10"
      >
        {/* Mobile Navbar */}

        <section className="w-10/12 bg-white fixed top-0 right-0 h-full text-black flex-col p-10">
          <RiCloseLargeFill
            onClick={() => setOpenMenu(false)}
            className="text-3xl cursor-pointer"
          />
          <ul className=" uppercase text-xl flex justify-center items-center flex-col h-full gap-y-10 transition-all">
            <li className="font-bold cursor-pointer hover:scale-125">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={() => setOpenMenu(false)}
              >
                Skills
              </Link>
            </li>
            <li className="font-bold cursor-pointer hover:scale-125">
              <Link
                to="about-me"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                onClick={() => setOpenMenu(false)}
              >
                About Me
              </Link>
            </li>
            <li className="font-bold cursor-pointer hover:scale-125">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                onClick={() => setOpenMenu(false)}
              >
                Projects
              </Link>
            </li>
            <li className="font-bold cursor-pointer hover:scale-125">
              <Link
                to="contact-me"
                spy={true}
                smooth={true}
                offset={50}
                duration={1500}
                onClick={() => setOpenMenu(false)}
              >
                Contact Me
              </Link>
            </li>
            <div className="flex items-center gap-2 bg-black text-white p-3 hover:scale-105 transition-all">
              <button>Resume</button>
              <AiOutlineDownload />
            </div>
          </ul>
        </section>
      </motion.div>
    </header>
  );
}

export default Navbar;
