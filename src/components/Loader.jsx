import { useState, useEffect } from "react";

const Loader = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [drawn, setDrawn] = useState(false);
  const [textIn, setTextIn] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const enter = setTimeout(() => setTextIn(true), 50);
    // kick off the squiggle + bar draw-in almost immediately
    const draw = setTimeout(() => setDrawn(true), 300);
    // bar finishes filling at 300 + 2200 = 2500ms
    const done = setTimeout(() => setComplete(true), 2500);
    // hold on the "complete" state for a beat before fading out
    const minTime = setTimeout(() => setFadeOut(true), 3000);

    return () => {
      clearTimeout(enter);
      clearTimeout(draw);
      clearTimeout(done);
      clearTimeout(minTime);
    };
  }, []);

  useEffect(() => {
    if (!fadeOut) return;
    const remove = setTimeout(() => {
      setVisible(false);
      if (onFinish) onFinish();
    }, 400); // matches the opacity transition below

    return () => clearTimeout(remove);
  }, [fadeOut, onFinish]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-paper flex flex-col items-center justify-center px-4 transition-opacity duration-400 ease-in-out
        ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div
        className="relative border-[3px] border-ink rounded-lg shadow-[6px_6px_0px_0px_#1a1a1a] bg-paper px-8 pt-5 pb-9 sm:px-10 sm:pt-6 sm:pb-10 lg:px-14 lg:pt-8 lg:pb-14 max-w-[90vw] transition-transform duration-300 ease-out"
        style={{ transform: complete ? "scale(1.04)" : "scale(1)" }}
      >
        <h1
          className="font-hand font-bold text-ink text-4xl sm:text-5xl lg:text-7xl transition-all duration-500 ease-out"
          style={{
            opacity: textIn ? 1 : 0,
            transform: textIn ? "translateY(0px)" : "translateY(12px)",
          }}
        >
          Subhan Ali
        </h1>
        <svg
          className="absolute bottom-3 left-10 right-10 sm:left-12 sm:right-12 lg:bottom-4 lg:left-16 lg:right-16 h-5 sm:h-6 lg:h-8"
          viewBox="0 0 300 40"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M5 22 Q60 12 120 22 Q180 32 240 16 Q270 10 295 22"
            stroke="#FF9F5A"
            strokeWidth="14"
            strokeLinecap="round"
            fill="none"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset={drawn ? 0 : 1}
            style={{ transition: "stroke-dashoffset 1.4s ease-out" }}
          />
        </svg>
      </div>

      <div className="mt-8 sm:mt-10 w-32 sm:w-40 lg:w-56 h-3 border-2 border-ink rounded-full overflow-hidden bg-white">
        <div
          className="h-full bg-[#FF9F5A]"
          style={{
            width: drawn ? "100%" : "10%",
            transition: "width 2.2s ease-in-out",
          }}
        />
      </div>

      <p
        className="font-mono text-ink/60 text-xs sm:text-sm mt-3 transition-all duration-300 ease-out"
        style={{
          opacity: 1,
          transform: complete ? "scale(1.1)" : "scale(1)",
        }}
      >
        {complete ? "ready ✦" : "booting things up..."}
      </p>
    </div>
  );
};

export default Loader;