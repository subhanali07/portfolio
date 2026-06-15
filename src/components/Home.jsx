import React, { useState } from "react";
import TypewriterComponent from "typewriter-effect";
import somecoolthings from "../assets/somecoolthings.svg";
import logo from "../assets/logo.svg";
import stars from "../assets/stars.svg";
import wires from "../assets/wires.svg";

const Home = () => {
  return (
    <>
      <section
        className="max-w-7xl mx-auto px-6 pt-34 pb-16 w-full flex flex-col justify-start items-start space-y-6"
        id="home"
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="flex flex-col items-start">
            <div className="font-hand text-lg border-[3px] rounded-lg shadow-[3px_3px_0px_0px_#1a1a1a] bg-paper border-ink px-4 py-1.5 ">
              Creative Developer
            </div>
            <div className="relative mt-6">
              <h1 className="font-hand font-bold text-7xl md:text-8xl text-ink leading-none">
                Subhan Ali
              </h1>
              <svg
                className="absolute -bottom-3 left-0 w-72 md:w-90"
                viewBox="0 0 300 20"
                fill="none"
              >
                <path
                  d="M5 12 Q60 2 120 12 Q180 22 240 10 Q270 4 295 12"
                  stroke="#1a1a1a"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray="400"
                  strokeDashoffset="400"
                  className="transition-[stroke-dashoffset] duration-1000 ease-out"
                  style={{ strokeDashoffset: 0 }}
                />
              </svg>
            </div>
            <p className="font-hand font-bold m-6 text-ink text-2xl md:text-3xl">
              I build &amp; design things.
            </p>
            <div className="relative mt-4 max-w-md">
              <p
                className="font-mono text-sm md:text-base leading-relaxed opacity-0"
                aria-hidden="true"
              >
                Developer who designs, designer who codes. I make weird and
                delightful things that work. I also like to learn about AI/ML
                stuff.
              </p>
              <p className="font-mono text-sm md:text-base text-ink/80 leading-relaxed absolute top-0 left-0">
                <TypewriterComponent
                  options={{
                    strings: [
                      "Developer who designs, designer who codes. I make weird and delightful things that work. I also like to learn about AI/ML stuff.",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 50,
                    cursor:
                      '<span class="inline-block w-3 h-[1.1em] bg-ink ml-1 animate-[pulse_0.8s_infinite]"></span>',
                  }}
                />
              </p>
            </div>
            <div className="flex gap-8 mt-14">
              <a href="/projects">
                <div className="font-hand text-xl bg-orange-300 border-[3px] border-ink px-6 py-1.5 rounded-lg shadow-[5px_5px_0px_0px_#1a1a1a] transition-all duration-200 ease-in-out hover:translate-x-0.75 hover:translate-y-0.75 hover:shadow-[2px_2px_0px_0px_#1a1a1a] cursor-pointer active:translate-x-1.25 active:translate-y-1.25 active:shadow-none">
                  See my work ↓
                </div>
              </a>
              <a href="/contact">
                <div className="font-hand text-xl bg-orange-300 border-[3px] border-ink px-6 py-1.5 rounded-lg shadow-[5px_5px_0px_0px_#1a1a1a] transition-all duration-200 ease-in-out hover:translate-x-0.75 hover:translate-y-0.75 hover:shadow-[2px_2px_0px_0px_#1a1a1a] cursor-pointer active:translate-x-1.25 active:translate-y-1.25 active:shadow-none">
                  Say Hello ╰┈➤🖂
                </div>
              </a>
            </div>
            <div className="hidden md:flex justify-center items-center relative h-full">
              <img src={logo}/>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
