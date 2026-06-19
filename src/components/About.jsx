import React from "react";
import { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaPython,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaMarkdown,
  FaCode,
  FaBook,
  FaLinkedin,
  FaPinterest,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import {
  SiChessdotcom,
  SiExpress,
  SiGnubash,
  SiGooglegemini,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { BiLogoVisualStudio, BiMovie } from "react-icons/bi";
import { BsClaude } from "react-icons/bs";
import { FaDumbbell, FaTwitter } from "react-icons/fa6";
import { href } from "react-router-dom";
import { PiPinterestLogo } from "react-icons/pi";
import StrollingDoodle from "../assets/StrollingDoodle.svg";
const About = () => {
  const [nicheRevealed, setnicheRevealed] = useState(false);
  const skills = [
    { name: "HTML", Level: "Comfortable", icon: <FaHtml5 />, rotate: "-1deg" },
    { name: "CSS", Level: "Comfortable", icon: <FaCss3 />, rotate: "0.5deg" },
    {
      name: "Tailwind CSS",
      Level: "Love It",
      icon: <RiTailwindCssFill />,
      rotate: "0.8deg",
    },
    {
      name: "Javascript",
      Level: "Comfortable",
      icon: <IoLogoJavascript />,
      rotate: "-0.6deg",
    },
    { name: "React JS", Level: "Love It", icon: <FaReact />, rotate: "1deg" },
    {
      name: "Node JS",
      Level: "Learning",
      icon: <FaNodeJs />,
      rotate: "0.4deg",
    },
    {
      name: "Express JS",
      Level: "Learning",
      icon: <SiExpress />,
      rotate: "-0.4deg",
    },
    {
      name: "Mongo DB",
      Level: "Learning",
      icon: <DiMongodb />,
      rotate: "0.6deg",
    },
    {
      name: "Python",
      Level: "Kinda Good",
      icon: <FaPython />,
      rotate: "-1deg",
    },
    { name: "Figma", Level: "Love It", icon: <FaFigma />, rotate: "0.2deg" },
  ];
  const tools = [
    {
      name: "Visual Studio Code",
      icon: <BiLogoVisualStudio />,
      rotate: "-1deg",
    },
    { name: "Zsh/Bash", icon: <SiGnubash />, rotate: "0.3deg" },
    { name: "Git", icon: <FaGitAlt />, rotate: "0.8deg" },
    { name: "Github", icon: <FaGithub />, rotate: "-0.8deg" },
    { name: "Claude", icon: <BsClaude />, rotate: "1deg" },
    { name: "Gemini", icon: <SiGooglegemini />, rotate: "-0.8deg" },
    { name: "Vercel", icon: <IoLogoVercel />, rotate: "-0.2deg" },
    { name: "Markdown", icon: <FaMarkdown />, rotate: "1deg" },
  ];
  const interests = [
    { text: "Coding", icon: <FaCode color="#4B5563" /> },
    { text: "Watching Movies", icon: <BiMovie color="#E11D48" /> },
    { text: "Playing Chess", icon: <SiChessdotcom color="#7FA650" /> },
    {
      text: "Reading Book (rarely, but it happens)",
      icon: <FaBook color="#2563EB" />,
    },
    {
      text: "and yeah i like to hit the gym too",
      icon: <FaDumbbell color="#DC2626" />,
    },
  ];
  const socials = [
    {
      label: "Github",
      icon: <FaGithub />,
      href: "https://github.com/subhanali07",
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/muhammad-subhan-ali-931636278/",
    },
    {
      label: "Pinterest",
      icon: <FaPinterest />,
      href: "https://www.pinterest.com/subhanali200823/",
    },
    {
      label: "Instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com/m_subhan_ali_/",
    },
    {
      label: "Twitter",
      icon: <FaTwitter />,
      href: "https://x.com/subhanali070",
    },
    {
      label: "Chess",
      icon: <SiChessdotcom />,
      href: "https://www.chess.com/member/msubhan_ali",
    },
    {
      label: "Discord",
      icon: <FaDiscord />,
      href: "https://discord.com/users/1180081229819809822",
    },
  ];

  return (
    <>
      <section
        id="about"
        className="min-h-screen max-w-7xl px-6 py-20 scroll-mt-20"
      >
        <div className="relative inline-block mb-12">
          <h1 className="font-hand font-bold text-ink text-5xl md:text-6xl">
            About me
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
              fill=""
            />
          </svg>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div className="md:col-span-1 flex justify-start">
            <div className="relative  border-[3px] border-ink rounded-lg shadow-[6px_6px_0px_0px_#1a1a1a] w-80 h-80 flex items-center justify-center text-6xl -rotate-S3deg">
              <img src={StrollingDoodle} />
            </div>
          </div>
          <div className="font-mono md:col-span-2 text-sm leading-relaxed text-ink space-y-4">
            <p>
              Hey, I'm{" "}
              <span className="font-hand font-bold text-ink text-3xl">
                Subhan
              </span>
              - 17y/o, based in Karachi, Pakistan, I build things on the web and
              mess around in Figma wayyy more than I probably should.
            </p>
            <p>
              I'm self-taught and still figuring a lot of this out, but I like
              shipping things that look a little weird and work properly. When
              I'm not coding, I'm probably watching a movie, lifting something
              heavy, or pretending I'm going to finish the book I started two
              months ago.
            </p>
          </div>
        </div>
        <div className="mb-16">
          <h3 className="font-bold font-hand text-4xl mb-6 text-ink">
            {" "}
            What I work with
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {skills.map((skill) => (
              <div
                key={skill.name}
                style={{ rotate: skill.rotate }}
                className="group bg-paper border-[3px] border-ink rounded-lg px-4 py-5 shadow-[5px_5px_0px_0px_#1a1a1a] transition-all duration-150 ease-in-out cursor-default hover:translate-x-0.75 hover:translate-y-0.75 hover:shadow-[2px_2px_0px_0px_#1a1a1a] hover:bg-[#FFE9A8]"
              >
                <div className="text-2xl text-ink mb-2">{skill.icon}</div>
                <p className="font-bold font-hand text-xl text-ink">
                  {skill.name}
                </p>
                <p className="font-mono text-xs text-ink/60 mt-1 group-hover:text-ink/80">
                  {skill.Level}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-16">
          <h3 className="font-hand font-bold text-3xl text-ink mb-6">
            Tools &amp; Tech
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {tools.map((tool) => (
              <div
                key={tool.name}
                style={{ rotate: tool.rotate }}
                className="group bg-paper border-[3px] border-ink rounded-lg px-4 py-5 shadow-[5px_5px_0px_0px_#1a1a1a] transition-all duration-150 ease-in-out cursor-default hover:translate-x-0.75 hover:translate-y-0.75 hover:shadow-[2px_2px_0px_0px_#1a1a1a] hover:bg-[#8FCBE8]"
              >
                <div className="text-3xl text-ink mb-2">{tool.icon}</div>
                <p className="font-hand font-bold text-xl text-ink">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-16">
          <h3 className="font-hand font-bold text-3xl text-ink mb-6">
            Outside the screen
          </h3>
          <div className="flex flex-wrap gap-4">
            {interests.map((interest, i) => (
              <span
                key={interest.text}
                style={{ rotate: `${i % 2 === 0 ? "-1deg" : "1deg"}` }}
                className="font-hand text-lg border-2 border-ink rounded-full px-5 py-2 bg-paper hover:bg-[#FF9F5A] transition-colors duration-150 cursor-default flex items-center gap-2 shadow-[2px_2px_0px_0px_#1a1a1a]"
              >
                <span className="flex items-center text-xl">
                  {interest.icon}
                </span>
                {interest.text}
              </span>
            ))}
          </div>
        </div>
        <div>
        <h3 className="font-hand font-bold text-3xl text-ink mb-6">
          Find me elsewhere
        </h3>
        <div className="flex flex-wrap gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-hand font-bold text-lg border-[3px] border-ink rounded-lg px-5 py-2.5 bg-[#FF9F5A] shadow-[4px_4px_0px_0px_#1a1a1a] transition-all duration-150 ease-in-out hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#1a1a1a]"
            >
              <span className="text-xl">{social.icon}</span>
              {social.label}
            </a>
          ))}
        </div>
      </div>

      {/* Hidden niche easter egg */}
      <div className="mt-16 flex justify-end">
        <button
          onClick={() => setnicheRevealed(!nicheRevealed)}
          className="text-xs font-mono text-ink/30 hover:text-ink/60 transition-colors cursor-pointer"
          aria-label="secret"
        >
          {nicheRevealed
            ? "okay fine, I'm not THAT niche."
            : "psst →"}
        </button>
      </div>
      </section>
    </>
  );
};

export default About;
