"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-colors_default mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-default bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Ishwor",
                1000,
                "Student",
                1000,
                "Web Developer",
                1000,
                "Discord Bot Developer",
                1000,
                "Software Developer",
                1000,
                "Data Analyst",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-colors_default text-base sm:text-lg mb-6 lg:text-xl'>
            This is the hero section for the website. I don't know what to put here. So this is what i have for now.
          </p>
          <div>
            <button className='px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'> 
            Projects
            </button>
            <button className='px- inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white border mt-3'> 
            Download CV
            </button>
          </div>
        </div>
        <div className="col-spam-5 place-self-center mt-4 lg:mg-0"
        >     
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
          src="/images/hero-image.png"
          alt='hero image'
          className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
          width={300}
          height={300}
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection