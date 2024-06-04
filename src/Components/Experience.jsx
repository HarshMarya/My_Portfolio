import React from "react";

function Experience() {
  return (
    <div className="bg-black text-white p-6 md:p-10 cursor-default">
      <h1 className="text-4xl text-center font-bold mb-4">My Experience</h1>
      <div className="w-[80px] h-[8px] bg-[#fff] rounded-xl mx-auto mb-10"></div>
      <div className="w-10/12 mx-auto">
        {/* Box 1 */}
        <div className=" border-[2px] border-gray-500 p-4 md:p-8 hover:bg-[#212121] hover:shadow-lg transition-all rounded-xl mb-6">
          <div className="flex flex-col md:flex-row justify-between mb-6 text-lg font-bold md:text-xl">
            <h3>My First Project</h3>
            <p>Jan 2024 - Feb 2024</p>
          </div>
          <div>
            <p>
              At Empenofore, we redefine learning through personalized
              experiences tailored to each learner's unique strengths and
              aspirations. Our comprehensive range of courses, led by experts in
              their fields, empowers learners to acquire knowledge, skills, and
              insights that transcend traditional boundaries. Whether you're
              exploring new interests or advancing your career, Empenofore
              provides the tools and support you need to thrive in today's
              dynamic world. Join us and unlock your full potential with
              accessible, engaging, and impactful education."
            </p>
          </div>
        </div>
        {/* Box - 2 */}
        <div className=" border-[2px] border-gray-500 p-4 md:p-8 hover:bg-[#212121] hover:shadow-lg transition-all rounded-xl mb-6">
          <div className="flex flex-col md:flex-row justify-between mb-6 text-lg font-bold md:text-xl">
            <h3>My Second Project</h3>
            <p>Jan 2024 - Feb 2024</p>
          </div>
          <div>
            <p>
            Developing Empenofore with React, React Router DOM, and Tailwind CSS has been a transformative experience, enriching my skills, knowledge, and perspective as a frontend developer and educator. I'm proud of the platform we've created and excited to continue pushing the boundaries of online education with innovative technologies and user-centered design principles.
            Through the process of building this photography education platform, I've gained invaluable insights 
            Overall, this project has been a transformative learning experience, equipping me with valuable skills and insights that will continue to inform my work as a developer and educator in the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
