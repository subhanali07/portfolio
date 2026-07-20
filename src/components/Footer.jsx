const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full h-80 mt-30 border-t-3  pt-8 bg-paper">
      <div className="mx-auto w-3/4 max-w-6xl border-t-4 mt-6 border-black rounded-full" />

      <div className="text-center mt-6">
        <div className="relative inline-flex flex-col items-center">
          <h1 className="text-6xl lg:font-bold 2xl:text-7xl font-hand">
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
        <p className="pt-7 font-mono font-bold text-ink/70">
          thanks for stopping by. built this whole thing <br /> from scratch and
          some caffeine
        </p>
      </div>
      <div className="mt-6 flex mb-69 justify-center">
        <button
          onClick={scrollToTop}
          className="font-mono text-sm ml-200  hover:bg-[#f8d69f] font-bold bg-white border-2 border-black rounded-xl px-5 py-2 shadow-[5px_5px_0px_0px_#1a1a1a] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#1a1a1a)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all  flex items-center gap-1.5"
        >
          <span>back to top<br/> (lessgoo)</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
