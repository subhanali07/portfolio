const NotFound = () => {
  return (
    <section className="min-h-auto flex flex-col items-center justify-center px-6 py-8 text-center">
      <div className="relative inline-block mb-8">
        <h1 className="font-hand font-bold text-ink text-8xl lg:text-9xl 2xl:text-[180px] leading-none">
          404
        </h1>
        <svg
          className="absolute -bottom-2 left-0 w-full"
          viewBox="0 0 300 16"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M5 10 Q60 2 120 10 Q180 18 240 6 Q270 2 295 10"
            stroke="#FF9F5A"
            strokeWidth="12"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <h2 className="font-hand font-bold text-ink text-4xl lg:text-5xl 2xl:text-6xl mb-4">
        uhh, how did u even get here???
      </h2>

      <p className="font-mono text-ink/70 text-sm lg:text-lg 2xl:text-xl max-w-md mb-10">
        idk how u got here, but it doesn't feel home but what exactly is home? maybe it's a placem, maybe its a memory, maybe its where you felt heard, maybe its where you felt warmth and comfort, maybe its the enviroment, maybe its the feeling of being loved. anyways lets take you back to the place where you felt home.
      </p>

      <a href="/#home">
        <div className="font-hand text-xl 2xl:text-4xl bg-orange-300 2xl:rounded-2xl 2xl:border-[6px] border-[3px] border-ink px-6 py-2 rounded-lg shadow-[5px_5px_0px_0px_#1a1a1a] transition-all duration-200 ease-in-out hover:translate-x-0.75 hover:translate-y-0.75 hover:shadow-[2px_2px_0px_0px_#1a1a1a] cursor-pointer active:translate-x-1.25 active:translate-y-1.25 active:shadow-none">
          Take me home ↩
        </div>
      </a>
    </section>
  );
};

export default NotFound;