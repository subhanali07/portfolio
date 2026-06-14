import React from "react";
import TypewriterComponent from "typewriter-effect";

const Home = () => {
  return (
    <>
      <section
        className="xl:min-h-screen min-h-[50vh] flex items-center px-6 overflow-hidden relative"
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
                stroke="#fffdf7"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="400"
                strokeDashoffset="400"
                className="transition-[stroke-dashoffset] duration-1000 ease-out"
                style={{ strokeDashoffset: 0 }}
              />
            </svg>
          </div>
          <p className="font-hand font-bold m-6 text-ink text-2xl md:text-3xl">I build &amp; design things.</p>
          <p className="font-mono text-sm md:text-base  max-w-md text-ink/80 leading-relaxed">
          <TypewriterComponent
          options={{
            strings: ["Developer who designs, designer who codes. I make weird and delightful things that work. I also like to learn about AI/ML stuff."],
            autoStart: true,
            loop: true,
            delay: 80,
            deleteSpeed: 40,
            cursor: '<span class="inline-block w-3 h-[1.1em] bg-ink ml-1 animate-[pulse_0.8s_infinite]"></span>',
          }}
        />
          </p>
            
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Home;
