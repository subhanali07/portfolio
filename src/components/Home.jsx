import{ useState, useEffect } from "react";
import TypewriterComponent from "typewriter-effect";
import arrowvector from "../assets/arrowvector.svg";
import logo from "../assets/logo.svg";
import stars from "../assets/stars.svg";
import wires from "../assets/wires.svg";
import cat from "../assets/cat.svg";
import donut from "../assets/donut.svg";
import bulb from "../assets/bulb.svg";
import radio from "../assets/radio.svg";
import idk from "../assets/idk.svg";
import scrolldown from "../assets/scrolldown.svg";

const Home = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const fadeRange = 200;

      let newOpacity = 1 - scrollPosition / fadeRange;
      if (newOpacity < 0) newOpacity = 0;
      if (newOpacity > 1) newOpacity = 1;

      setOpacity(newOpacity);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <section
        className="max-w-full w-full 2xl:mt-12 lg:mt-7 min-h-screen px-8 pt-28 xl:pt-18 2xl:pt-24 pb-8 flex flex-col justify-center items-start"
        id="home"
      >
        {" "}
        <div className="mx-auto w-full  grid grid-cols-1 md:grid-cols-2  items-center gap-8">
          <div className="flex flex-col  items-start">
            <div className="font-hand 2xl:font-bold  font-bold  text-lg md:text-xl lg:text-2xl 2xl:text-3xl  border-[3px] 2xl:border-[5px] 2xl:rounded-xl 2xl:p-3 rounded-lg shadow-[3px_3px_0px_0px_#1a1a1a] 2xl:shadow-[6px_6px_0px_0px_#1a1a1a] bg-paper border-ink px-4 py-1.5 ">
              Creative Developer
            </div>
            <div className="relative mt-6">
              <h1 className="font-hand font-bold text-7xl 2xl:mt-12 md:text-7xl  2xl:text-[120px] text-ink leading-none">
                Subhan Ali
              </h1>
              <svg
                className="absolute -bottom-100 w-70 h-198 left-0  2xl:h-198 md:w-70 2xl:w-120 md:h-198 "
                viewBox="0 0 300 20"
                fill="none"
              >
                <path
                  d="M5 12 Q60 2 120 12 Q180 22 240 10 Q270 4 295 12"
                  stroke="#FF9F5A"
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
            <p className="font-hand font-bold mt-8 text-ink 2xl:text-5xl 2xl:pt-8  text-2xl md:text-3xl">
              I build &amp; design things.
            </p>
            <div className="relative mb-8 mt-4 max-w-full ">
              <p
                className="font-mono text-sm md:text-base  2xl:text-xl pl-9 leading-relaxed opacity-0"
                aria-hidden="true"
              >
                Developer who designs, designer who codes. I make weird and
                delightful things that work. I also like to learn about AI/ML
                stuff.
              </p>
              <p className="font-mono text-sm md:text-base text-ink/80 2xl:text-xl  leading-relaxed pl-4  absolute top-0 pointer-events-none left-0">
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
            <div className="flex gap-8 relative  z-10 ">
              <a href="#projects">
                <div className="font-hand text-xl 2xl:text-4xl  bg-orange-300 2xl:rounded-2xl 2xl:border-[6px] border-[3px] border-ink px-3 py-1.5 rounded-lg shadow-[5px_5px_0px_0px_#1a1a1a] transition-all duration-200 ease-in-out hover:translate-x-0.75 hover:translate-y-0.75 hover:shadow-[2px_2px_0px_0px_#1a1a1a] cursor-pointer active:translate-x-1.25 active:translate-y-1.25 active:shadow-none">
                  See my work ↓
                </div>
              </a>
              <a href="#contact">
                <div className="font-hand text-xl 2xl:text-4xl bg-orange-300  2xl:rounded-2xl 2xl:border-[6px] border-[3px] border-ink px-6 py-1.5 rounded-lg shadow-[5px_5px_0px_0px_#1a1a1a] transition-all duration-200 ease-in-out hover:translate-x-0.75 hover:translate-y-0.75 hover:shadow-[2px_2px_0px_0px_#1a1a1a] cursor-pointer active:translate-x-1.25 active:translate-y-1.25 active:shadow-none">
                  Say Hello ╰┈➤🖂
                </div>
              </a>
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center w-full h-full min-h-125">
  <div className="relative w-175 h-112.5 flex justify-center items-center origin-center transform 2xl:mt-18 2xl:scale-135">
    
    <img
      src={logo}
      alt="Logo"
      className="object-contain 2xl:h-30 z-10 w-auto h-25"
    />

    <img
      src={stars}
      alt="Stars"
      className="absolute w-16 h-16 animate-pulse z-0"
    />

    <img
      src={wires}
      alt="Wires"
      className="absolute  right-120 top-60 size-35 [@media(min-width:1700px)]:size-50 2xl:top-69  [@media(min-width:1700px)]:right-150  object-contain"
    />
    
    <img
      src={donut}
      alt="donut"
      className="absolute top-80 left-64 2xl:top-78 2xl:h-17 2xl:w-35 2xl:left-80 origin-center w-20  rotate-12"
    />
    
    <img
      src={idk}
      alt="bird"
      className="absolute top-16 left-12  2xl:top-25 2xl:size-28 [@media(min-width:1700px)]:size-35 origin-center size-30 rotate-12"
    />

    <img
      src={arrowvector}
      alt="Asset"
      className="absolute
       font-bold 2xl:size-30 2xl:bottom-90 2xl:right-118 md:right-0 size-25 [@media(min-width:1700px)]:size-40 origin-center rotate-2"
    />
    
    <img
      src={bulb}
      alt="bulb"
      className="absolute 2xl:size-40 2xl:bottom-99 md:bottom-99 [@media(min-width:1700px)]:size-60 w-30 h-30  origin-center rotate-2"
    />
    
    <img
      src={radio}
      alt="radio"
      className="absolute top-12 right-24 2xl:size-30 origin-center w-20 h-20 rotate-12"
    />
    
    <img
      src={cat}
      alt="kitty"
      className="absolute bottom-20 right-16 2xl:size-30 [@media(min-width:1700px)]:size-36  [@media(min-width:1700px)]:bottom-0 origin-center size-20 rotate-30"
    />

    <img
      src={scrolldown}
      alt="da scroll"
      style={{ opacity: opacity }}
      className="absolute bottom-4 right-20 2xl:w-40 2xl:h-50 2xl:top-125 2xl:right-1 origin-center w-30 h-20 transition-opacity duration-75 ease-out"
    />
  </div>
</div>
        </div>
      </section>
    </>
  );
};

export default Home;
