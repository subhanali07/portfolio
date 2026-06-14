import React from "react";

const Home = () => {
  return (
    <>
      <section
        className="min-h-screen flex items-center pt-20 px-6 overflow-hidden relative"
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
              className="absolute -bottom-3 left-0 w-[70%]"
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
            
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Home;
