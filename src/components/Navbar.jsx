
import { useState } from "react";
import salogoblackapplefont from "../assets/salogoblackapplefont.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-50 2xl:h-24  bg-[#FF9F5A] [@media(min-width:1700px)]:h-37 border-b-[6px] shadow-[4px_4px_0px_0px_ink]  border-ink ">
        <div className="max-w-7xl 2xl:max-w-full  mx-auto flex [@media(min-width:1700px)]:px-16 items-center justify-between px-6   ">
          <a href="#home" onClick={() => setIsOpen(false)}>
            <img src={salogoblackapplefont} alt="logo" className="h-18 2xl:h-28 2xl:pl-9 2xl:w-auto w-auto [@media(min-width:1700px)]:h-36 " />
          </a>
          <div className="hidden md:flex items-center [@media(min-width:1700px)]:gap-12 gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative  font-hand font-bold 2xl:text-lg text-ink bg-paper border-2 2xl:border-4 2xl:p-2 2xl:px-5  border-ink px-4 py-1.5 rounded-lg shadow-[3px_3px_0px_0px_#1A1A1A] 2xl:shadow-[6px_6px_0px_0px_#1A1A1A] [@media(min-width:1700px)]:active:shadow-none [@media(min-width:1700px)]:px-8 [@media(min-width:1700px)]:py-2 2xl:rounded-2xl [@media(min-width:1700px)]:hover:shadow-[4px_4px_0px_0px_#1A1A1A] [@media(min-width:1700px)]:shadow-[7px_7px_0px_0px_#1A1A1A] transition-all duration-100 ease-in-out hover:translate-x-px 2xl:hover:translate-x-0.5 2xl:hover:translate-y-0.5 hover:translate-y-px hover:shadow-[2px_2px_0px_0px_#1A1A1A] 2xl:hover:shadow-[4px_4px_0px_0px_#1A1A1A] active:translate-x-0.75 2xl:active:translate-x-1 active:translate-y-0.75 2xl:active:translate-y-1 active:shadow-none 2xl:active:shadow-none block"
              >
                <span className="relative z-10 2xl:font-bold 2xl:text-3xl ">{link.label}</span>
                <svg
                  className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)] pointer-events-none overflow-visible z-30"
                  viewBox="0 0 100 40"
                >
                  <ellipse
                    cx="50"
                    cy="20"
                    rx="46"
                    ry="16"
                    fill="none"
                    stroke="#292929"
                    strokeWidth="2.5"
                    strokeDasharray="280"
                    strokeDashoffset="280"
                    className="transition-[stroke-dashoffset] duration-500 ease-out group-hover:[stroke-dashoffset:0]"
                  />
                </svg>
              </a>
            ))}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden hover:shadow-[2px_2px_0px_0px_#1A1A1A] font-hand text-3xl border-2 border-ink px-3 py-1 rounded-lg bg-paper shadow-[3px_3px_0px_0px_#1A1A1A] active:translate-y-0.5 active:shadow-none"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>
      <div
  className={`fixed inset-0 z-40 bg-[#f8d69f] flex flex-col items-center justify-center gap-8 pt-16 transition-all duration-300 ease-in-out
    ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}
  `}>
            {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
className="font-hand font-bold text-4xl text-ink border-[3px] border-ink px-8 py-3 rounded-lg bg-paper shadow-[5px_5px_0px_0px_#1A1A1A] transition-all duration-100 ease-in-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_0px_#1A1A1A] active:translate-x-1 active:translate-y-1 active:shadow-none">
              {link.label}
            </a>
          ))}
        </div>
      
    
    </>
  );
};

export default Navbar;
