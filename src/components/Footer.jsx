const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full h-auto mt-2 lg:mt-6 border-t-3 py-5 bg-paper pb-4">
      <div className="mx-auto w-3/4 max-w-6xl border-t-4 mt-2 lg:mt-4 border-black rounded-full" />

      <div className="text-center mt-2 lg:mt-4">
        <div className="relative inline-flex flex-col items-center">
          <h1 className="text-4xl lg:font-bold 2xl:text-6xl font-hand">
            that's a wrap ig
          </h1>

          <svg
            className="absolute -bottom-3 left-0 w-full h-4 overflow-visible"
            viewBox="0 0 320 6"
            fill="none"
          >
            <path
              d="M5 10 Q60 2 120 10 Q180 18 240 6 Q270 2 295 10"
              stroke="#FF9F5A"
              strokeWidth="9"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <p className="pt-5 font-mono text-sm lg:text-md 2xl:text-xl font-bold text-ink/70">
          thanks for stopping by. built this whole thing <br /> from scratch and maybe 
          some caffeine too and yeah i made it for <a className="cursor-pointer hover:text-[#000000]" target="_blank" href="https://horizons.hackclub.com"> hackclub horizons </a>:)
        </p>
        <div className="flex items-center justify-center">
        <a href="#home">
        <button
        
          onClick={scrollToTop}
          className="font-mono text-sm 2xl:text-lg  mt-2  ease-in font-bold py-1 bg-[#FF9F5A] border-3 border-black rounded-lg px-2  shadow-[5px_5px_0px_0px_#1a1a1a] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#1a1a1a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all  flex items-center"
        >
          <span>back to top<br/> (lessgoo)</span>
        </button>
        </a>
        </div>
      </div>
<div className="mt-4 flex border-t-4 border-ink/50  justify-center">
      ________
    
</div>
      
       <div className=" max-w-full flex items-center justify-center m-1">
        <p className="font-mono text-md 2xl:text-xl  text-ink/80">
          © {new Date().getFullYear()} UR FRIENDLY NEIGHBOURHOOD DEVELOPER
        </p>
      </div>
    </footer>
  );
};

export default Footer;
