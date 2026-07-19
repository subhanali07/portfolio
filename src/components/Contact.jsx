import girl from "../assets/girl.jpg"



const Contact = () => {
  return (
    <>
      <section id="contact" className="min-h-screen max-w-9xl px-6 py-16">
        <div className="relative inline-block mb-12 ">
          <h1 className="font-hand text-6xl 2xl:text-8xl text-ink font-bold">
            Wanna talk???
          </h1>
          <img className="absolute hidden lg:flex top-12 left-220 2xl:left-390 2xl:top-40" src={girl} alt="Contact" />
          <svg
            className="absolute bottom-0 2xl:w-150 2xl:top-22 top-14 w-100"
            viewBox="0 0 365 40"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M5 10 Q60 2 120 10 Q180 18 240 6 Q270 2 295 10"
              stroke="#FF9F5A"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>
          <div className="font-mono mt-4 text-ink/70  2xl:text-2xl 2xl:mt-9 text-sm ml-3">always down to chat about projects,<br/>  ideas or just random stuff :)</div>
        </div>
        <div className="w-114 h-130 lg:w-200 lg:h-85 bg-paper border-4 rounded-xl shadow-[6px_6px_0px_0px_#1a1a1a] 2xl:w-300 ">
          <p className="mt-3 ml-9 mr-9 text-ink/70 text-sm lg:text-xl 2xl:text-2xl font-mono">there u go these are my mail address and some socials im chronically active on</p>
        </div>
      </section>
    </>
  );
};

export default Contact;
