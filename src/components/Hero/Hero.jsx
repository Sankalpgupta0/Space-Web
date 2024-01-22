import React from "react";
import MountainPng from "../../assets/moon-surface-hd.png";

const Hero = () => {
  return (
    <div className=" bg-black/10 h-full w-full">
      <div className="h-full flex justify-center items-center p-4 w-full">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <div className="text-white space-y-4 lg:pr-36 w-full">
            <h1 data-aos="fade-up" className="text-5xl max-sm:mt-20 font-bold w-full max-sm:text-2xl">
              ORBIT THE EARTH
            </h1>
            <p data-aos="fade-up" data-aos-delay="300" className="max-sm:text-sm max-sm:my-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className="max-sm:hidden">
              Totam ea dolorem eius accusamus beatae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A velit maiores odit iusto tenetur modi voluptatem excepturi repudiandae magnam officiis.
                </span> 
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 max-sm:py-0 max-sm:my-0 rounded-md duration-200 max-sm:hidden"
            >
              LEARN MORE
            </button>
          </div>
          <div></div>
        </div>
      </div>
      <img
        src={MountainPng}
        alt=""
        className="absolute right-0 bottom-0 w-full brightness-50 z-10 max-sm:hidden"
      />

      <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  );
};

export default Hero;
