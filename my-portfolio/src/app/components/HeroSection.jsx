import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
            <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold"> 
                Hello, I am Ishwor </h1>
                <p className="text-[#ADB7BE] text-lg lg:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor consequatur illo ab modi atque cum harum voluptatibus nulla quasi quas!
                </p>
            </div>
            <div>
                <div className="rounded-full bg-black w-500 h-400 relative ">
                    <div className="col-span-5" ></div>
                    <Image
                    src = "/images/hero.webp"
                    alt = "hero image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    h= {300}
                    ht= {300}
                    />  
                                </div>
                </div>
        </section>
    );
};

export default HeroSection;
