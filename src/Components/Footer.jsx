import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo2.svg";

function Footer() {
  return (
    <footer className="bg-black text-white p-2 lg:p-6 uppercase">
      <div className="w-full lg:w-1/2 mx-auto flex justify-around gap-10 items-center">
        <div className="bg-black text-white">
        <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
          <img src={logo} className="w-[100px] text-white" />
          </Link>
        </div>
        <div className="my-4 text-sm lg:text-lg font-bold text-right">
          <h2 className=" text-2xl lg:text-3xl my-4">Let's talk for something special</h2>
          <p className="my-2 uppercase">
            Feel free to contect me.
          </p>
          <p>HARSHMK22@GMAIL.COM</p>
          <p>+91-12345-6789</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
