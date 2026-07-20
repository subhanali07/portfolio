const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full h-85 2xl:h-100 mt-16 border-t-3 bg-paper">
      <div className="mx-auto w-3/4 max-w-6xl border-t-4 mt-6 border-black rounded-full" />

      <div className="text-center mt-6">
        <div className="relative inline-flex flex-col items-center">
          <h1 className="text-6xl lg:font-bold 2xl:text-8xl font-hand">
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
        <p className="pt-7 font-mono text-lg 2xl:text-2xl font-bold text-ink/70">
          thanks for stopping by. built this whole thing <br /> from scratch and
          some caffeine
        </p>
        <div className="flex items-center justify-center">
        <a href="#home">
        <button
        
          onClick={scrollToTop}
          className="font-mono text-sm 2xl:text-2xl  mt-4  ease-in duration-200 font-bold py-1 bg-[#FF9F5A] border-3 border-black rounded-lg px-5  shadow-[5px_5px_0px_0px_#1a1a1a] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#1a1a1a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all  flex items-center gap-1.5"
        >
          <span>back to top<br/> (lessgoo)</span>
        </button>
        </a>
        </div>
      </div>
       
      <div className="mt-6 flex border-t-4 border-ink/50  justify-center">
    
      </div>
       <div className=" max-w-full flex items-center justify-center mx-auto m-2">
        <p className="font-mono text-sm 2xl:text-2xl  text-ink/80">
          © {new Date().getFullYear()} UR FRIENDLY NEIGHBOURHOOD SPIDERMAN
        </p>
      </div>
    </footer>
  );
};

export default Footer;
