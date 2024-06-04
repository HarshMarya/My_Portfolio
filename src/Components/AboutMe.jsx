import React from "react";
import sideImg from "../assets/programmer.svg";

function AboutMe() {
  return (
    <>
      <div
        className="flex flex-col-reverse lg:flex-row justify-around p-6 md:p-10 gap-10 items-center"
        id="about-me"
      >
        <img
          src={sideImg}
          className="w-[400px] lg:w-[550px] xl:w-[850px] mx-auto"
        />
        <div className="mx-auto items-center text-center lg:text-start mb-6 w-full lg:w-1/2">
          <h1 className="text-4xl text-center font-bold mb-2">About Me</h1>
          <div className="w-[80px] h-[8px] bg-[#3F3D56] rounded-xl mx-auto"></div>
          <p className="mb-6 mt-10">
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className="mb-6">
            I began my journey as a web developer in 2023, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way, Now,
            in my early twenties, a years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Node.js, Express.js, Bootstrap, Tailwindcss,
            Jquery and much more.
          </p>
          <p className="mb-6">
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on{" "}
            <span className="text-blue-600 font-bold">
              <a
                href="https://www.linkedin.com/in/harsh-maurya-552161293"
                target="_blank"
              >
                LinkdIn
              </a>
            </span>
            , witnessing the journey of early startups or enjoying some free
            time. You can follow me on Twitter where I share tech-related bites
            and butld in public, or you can follow me on GitHub.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
