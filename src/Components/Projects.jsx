import React from "react";
import project1 from "../assets/img1.png";
import project2 from "../assets/img2.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";


function Projects() {
  return (
    <div className="bg-black text-white p-6 md:p-10" id="projects">
      <h1 className="text-4xl text-center font-bold mb-4">My Projects</h1>
      <div className="w-[80px] h-[8px] bg-[#fff] rounded-xl mx-auto mb-10"></div>

      {/* Projects 1*/}
      <div className="conatiner flex mx-auto flex-col-reverse lg:flex-row justify-center items-center gap-10">
          <img src={project1} className="w-[500px] lg:w-[700px] rounded-xl"/>
        <div className="w-full lg:w-1/2 mx-auto h-full tracking-wider">
          <p className="text-5xl mb-4 ">01.</p>
          <h2 className="text-3xl mb-4 tracking-widest">Photography Site</h2>
          <p className="text-lg mb-4">
          This project built with React, React Router DOM, Framer Motion, and Tailwind CSS, our site combines stunning visuals with seamless navigation.
          With React, enjoy lightning-fast performance and smooth user experience. React Router DOM ensures intuitive navigation, while Framer Motion adds dynamic animations that captivate your audience.
          Tailwind CSS allows for customizable styling, ensuring your portfolio reflects your unique aesthetic. From typography to layout, every detail is tailored to perfection.
          </p>
          <a href="https://photography-portfolio-built.netlify.app/" target="_blank" className="inline-block text-xl pr-6 hover:scale-150 transition-all"><FaExternalLinkAlt /></a>
          <a href="https://github.com/HarshMarya/Photography-Site" target="_blank" className="inline-block text-xl pr-6 hover:scale-150 transition-all"><TbBrandGithubFilled /></a>
        </div>
      </div>
      {/* Project 2 */}
      <div className="conatiner flex mx-auto flex-col lg:flex-row justify-center items-center gap-10">
        <div className="w-full lg:w-1/2 mx-auto h-full tracking-wider">
          <p className="text-5xl mb-4 ">02.</p>
          <h2 className="text-3xl mb-4 tracking-widest">Education Site</h2>
          <p className="text-lg mb-4">
          Built with React, React Router DOM, and Tailwind CSS, our site combines stunning visuals with seamless navigation.
          Whether you're a seasoned educator or just starting out, Education Site offers the technology and design to elevate your online teaching. Welcome to the future of photography education. Welcome to Empenofore.
          </p>
          <a href="https://empenfore-education.netlify.app/" target="_blank" className="inline-block text-xl pr-6 hover:scale-150 transition-all"><FaExternalLinkAlt /></a>
          <a href="https://github.com/HarshMarya/Empenofore" target="_blank" className="inline-block text-xl pr-6 hover:scale-150 transition-all"><TbBrandGithubFilled /></a>
        </div>
          <img src={project2} className="w-[500px] lg:w-[700px] h-full rounded-xl"/>
      </div>
    </div>
  );
}

export default Projects;
