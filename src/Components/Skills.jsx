import React from "react";
import { IoLogoSass } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const skills = [
  {
    icon: <IoLogoHtml5/>,
    skill_name: "HTML5",
  },
  {
    icon: <IoLogoCss3/>,
    skill_name: "CSS3",
  },
  {
    icon: <FaBootstrap/>,
    skill_name: "Bootstrap",
  },
  {
    icon: <RiTailwindCssFill/>,
    skill_name: "TailwindCSS",
  },
  {
    icon: <IoLogoSass/>,
    skill_name: "SCSS/SASS",
  },
  {
    icon: <IoLogoJavascript/>,
    skill_name: "JavaScript",
  },
  {
    icon: <SiJquery/>,
    skill_name: "JQuery",
  },
  {
    icon: <FaReact/>,
    skill_name: "React.js",
  },
  {
    icon: <TbBrandReactNative/>,
    skill_name: "React Native",
  },
  {
    icon: <FaGitAlt/>,
    skill_name: "Git",
  },
  {
    icon: <FiGithub/>,
    skill_name: "GitHub",
  },
];

function Skills() {

  return (
    <>
      <div className="p-6 md:p-10" id="skills">
        <h1 className="text-4xl text-center font-bold mb-4">My Skills</h1>
        <div className="w-[80px] h-[8px] bg-[#3F3D56] rounded-xl mx-auto "></div>
        <div className="container flex gap-10 flex-wrap md:flex-row items-center justify-center text-center my-10 mx-auto w-10/12 lg:w-1/2">

            {skills.map((value, index) => 
            <div key={index} className="w-[110px] h-[110px] md:w-[150px] md:h-[150px] flex flex-col items-center justify-center gap-0 md:gap-4 border-[2px] border-black hover:bg-black hover:text-white transition duration-150 ease-out hover:ease-in cursor-default dark:bg-white">
                <div className="text-4xl md:text-5xl m-2">{value.icon}</div>
                <p className="text-lg md:text-xl">{value.skill_name}</p>
                </div>
            )}
        </div>
      </div>
    </>
  );
}

export default Skills;
