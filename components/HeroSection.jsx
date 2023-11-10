"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const downloadCV = () => {
    const cvUrl = "/pdf/ishwor.pdf";

    const anchor = document.createElement("a");
    anchor.href = cvUrl;
    anchor.target = "_blank";
    anchor.download = "ishwor-Resume.pdf";

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
};

const HeroSection = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-12 my-4 md:pb-20">
            <div className="col-span-7 flex flex-col justify-center items-center lg:place-items-start">
                <h1 className="text-colors_default max-w-2xl mb-4 md:text-6xl text-3xl font-extrabold pb-11">
                    <span className="text-colors_default text-4xl md:text-6xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
                        Hello, I&apos;m{" "}
                    </span>{" "}
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            "A Student",
                            1000,
                            "A Software Developer",
                            1000,
                            "A Web Developer",
                            1000,
                            "A Discord Bot Developer",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-colors_default text-base mb-6 textl-lg lg:text-xl">
                    Hello, welcome to my portfolio! I&apos;m a full-time student at the University of Lethbridge studying
                    Computer Science and Business Management.
                </p>
                <div>
                    <button
                        className="m-4 bg-gradient-to-br from-blue-300 via-purple-500 to-blue-600 px-1 py-1  text-white rounded-full"
                        onClick={downloadCV}
                    >
                        <span className="block rounded-full px-5 py-2">
                            My Projects
                        </span>
                    </button>
                    <button
                        className="m-4 bg-gradient-to-br from-blue-300 via-purple-500 to-blue-600 px-1 py-1  text-white rounded-full"
                        onClick={downloadCV}
                    >
                        <span className="block rounded-full px-5 py-2">
                            Download CV
                        </span>
                    </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0 lg:pt-12">
                <div className="bg-gradient-to-b from-blue-200 to-blue-500 lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] shadow-2xl rounded-full relative">
                    <Image
                        src="/images/hero-image.png"
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;