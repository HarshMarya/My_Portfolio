import React, { useState } from "react";
import { FaAngleRight, FaQuoteRight } from "react-icons/fa";
import TestimonialData from "./TestimonialData";
import { FaAngleLeft, FaChevronRight } from "react-icons/fa6";

function Testimonial() {
  const [current, setCurrent] = useState(0);
  const length = TestimonialData.length;
  return (
    <>
      <div className="p-10">
        <h1 className="text-4xl text-center font-bold mb-4">
          My Testimonial
        </h1>
        <div className="w-[80px] h-[8px] bg-[#3F3D56] rounded-xl mx-auto mb-10"></div>

        <div className="container mx-auto flex gap-2 lg:gap-20 justify-center items-center flex-wrap relative">
          {TestimonialData.map(
            (item, index) =>
              index === current && (
                <div key={item}>
                  <div className="relative p-6 w-[300px] shadow-xl rounded-xl text-center my-4">
                      <FaAngleLeft className="bg-black w-[50px] h-[50px] text-white p-4 rounded-full absolute cursor-pointer hover:bg-gray-700 transition-all top-[200px] -left-[30px]" onClick={() =>setCurrent(current === 0 ? length - 1 : current - 1)}/>
                      <FaChevronRight className="bg-black w-[50px] h-[50px] text-white p-4 rounded-full absolute cursor-pointer hover:bg-gray-700 transition-all top-[200px] -right-[30px]" onClick={() =>setCurrent(current === length - 1 ? 0 : current + 1)}/>
                      <div className="relative">
                      <img
                      src={item.img}
                      alt=""
                      className="w-[100px] mb-6 mx-auto"
                    />
                    <FaQuoteRight className="absolute top-[70px] left-[150px] text-3xl text-[#fff] bg-black rounded-full p-2" />
                      </div>
                    <div>
                      <p>{item.content_text}</p>
                      <div className="w-1/2 mx-auto my-2 bg-black h-[4px]"></div>
                      <p className="text-2xl my-6">{item.testimonial_name}</p>
                      <p>{item.text_block}</p>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}

export default Testimonial;
