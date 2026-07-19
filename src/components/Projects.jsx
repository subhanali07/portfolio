
import { useState } from "react";
import portfolioss from "../assets/portfolioss.png";
import screenshot from "../assets/screenshot.png";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Ping Pong",
      description:
        "A local 2-player arcade Ping Pong game built in Python using [Turtle / Pygame]. This project highlights core software concepts including object rendering, keyboard listener events, custom coordinate logic, and real-time collision mechanics.",
      stack: ["Python", "Pygame"],
      screenshot: screenshot,
      repolink: "https://github.com/subhanali07/Ping-Pong-Game",
    },
    {
      id: 2,
      title: "My Portfolio",
      description:
        "A neo-brutalist digital playground built using custom doodles, high-contrast borders, and clean code to showcase my creative engineering skills.",
      stack: ["React", "Tailwind CSS", "JavaScript"],
      screenshot: portfolioss,
      repolink: "https://github.com/subhanali07/portfolio",
    },
  ];
  return (
    
      <section id="projects" className=" min-h-screen max-w-9xl px-6 py-16">
        <div className="relative inline-block mb-12">
          <h1 className="font-hand 2xl:text-8xl text-ink font-bold text-6xl">
            {" "}
            Some Projects...
          </h1>
          <svg
            className="absolute bottom-0 2xl:w-150 2xl:top-22 top-14 w-100 "
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

          <p className="text-sm lg:text-lg text-ink/60 2xl:text-2xl 2xl:mt-3 font-mono pt-5 pl-3">
            here is some stuff I've made.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative mt-12 ">
          {projects.map((project) => {
            const isSelected = activeProject?.id === project.id;
            const isAnySelected = activeProject !== null;
            return (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`cursor-pointer rounded-lg bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300
                  ${isAnySelected && !isSelected ? "scale-95 opacity-50 md:-translate-x-4" : "scale-100 opacity-100"}
                `}
              >
                <h2 className="text-3xl font-black font-mono mb-2">
                  {project.title}
                </h2>
                <div className="flex gap-2 flex-wrap">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className=" border-2 border-black bg-[#FF9F5A] px-2 py-0.5 text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm font-mono text-gray-700">
                  Click for details
                </p>
              </div>
            );
          })}
        </div>
                {activeProject && (
          <div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveProject(null)}
          >
            <div
              className="bg-white border-4 border-black max-w-2xl w-full max-h-[90vh] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute -top-4 -right-4 bg-[#FF5A5A] border-4 border-black w-12 h-12 font-bold text-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all z-50"
              >
                ✕
              </button>

              <div className="p-8 overflow-y-auto">
                <h3 className="text-4xl font-black font-mono rounded-lg mb-4 bg-[#FF9F5A] inline-block px-4 py-1 border-2 border-black">
                  {activeProject.title}
                </h3>

                <div className="flex gap-2 flex-wrap mb-6">
                  {activeProject.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="border-2 border-black bg-yellow-300 px-3 py-1 font-mono font-bold text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {activeProject.screenshot && (
                  <div className="border-4 border-black rounded-lg bg-gray-100 mb-6 overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <img
                      src={activeProject.screenshot}
                      alt={`${activeProject.title} preview`}
                      className="w-full h-auto object-cover block"
                    />
                  </div>
                )}

                <p className="font-mono text-base mb-8 leading-relaxed text-gray-800">
                  {activeProject.description}
                </p>

                <a
                  href={activeProject.repolink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-lg bg-black text-white font-mono font-bold px-6 py-3 border-2 border-black hover:bg-white hover:text-black shadow-[4px_4px_0px_0px_rgba(255,159,90,1)] transition-all"
                >
                View Code Repository ↗
              </a>
            </div>
          </div>
          </div>
          )}
      </section>
  );
};

export default Projects;
