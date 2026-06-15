
import { useState } from "react";
import SALOGO from "../assets/SALOGO.svg";
import Logosa from "../assets/Logosa.svg";
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
      <nav className="w-full fixed top-0 left-0 z-50 bg-[#FF9F5A] border-b-[6px] shadow-[4px_4px_0px_0px_ink]  border-ink ">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-2 py-2">
          <a href="#home" onClick={() => setIsOpen(false)}>
            <img src={salogoblackapplefont} alt="logo" className="h-18 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative font-hand font-bold text-lg text-ink bg-paper border-2 border-ink px-4 py-1.5 rounded-lg shadow-[3px_3px_0px_0px_#1A1A1A] transition-all duration-100 ease-in-out hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_0px_#1A1A1A] active:translate-x-0.75 active:translate-y-0.75 active:shadow-none block"
              >
                <span className="relative z-10">{link.label}</span>
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
                    stroke="#fb8200"
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
  className={`fixed inset-0 z-40 bg-[#fbcda5] flex flex-col items-center justify-center gap-8 pt-16 transition-all duration-300 ease-in-out
    ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}
  `}>
            {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-hand font-bold text-4xl text-ink border-[3px] border-ink px-8 py-3 rounded-lg bg-paper shadow-[5px_5px_0px_0px_#1A1A1A] active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              {link.label}
            </a>
          ))}
        </div>
      
    
    </>
  );
};

export default Navbar;
