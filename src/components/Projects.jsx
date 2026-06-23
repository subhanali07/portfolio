import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Ping Pong",
      Description:
        "A local 2-player arcade Ping Pong game built in Python using [Turtle / Pygame]. This project highlights core software concepts including object rendering, keyboard listener events, custom coordinate logic, and real-time collision mechanics.",
        
      
    },
  ];
  return (
    <>
      <section
        id="projects"
        className="bg-blue-100/60 min-h-screen max-w-9xl px-8 py-20"
      >
        <div className="relative inline-block mb-12">
          <h1 className="font-hand text-ink font-bold text-5xl">
            {" "}
            Wanna see some projects???
          </h1>
          <span className="text-s text-ink/80 font-hand ml-25">
            {" "}
            here are some projects heh
          </span>
          <div className=""></div>
        </div>
      </section>
    </>
  );
};

export default Projects;
