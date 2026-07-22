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
import { BsClaude, BsTwitterX } from "react-icons/bs";
import { FaDumbbell,  } from "react-icons/fa6";
import StrollingDoodle from "../assets/StrollingDoodle.svg";
const About = () => {
  const [nicheRevealed, setnicheRevealed] = useState(false);
  const skills = [
    {
      name: "HTML",
      Level: "Comfortable",
      icon: <FaHtml5 color="#E34F26" />,
      rotate: "-1deg",
    },
    {
      name: "CSS",
      Level: "Comfortable",
      icon: <FaCss3 color="#1572B6" />,
      rotate: "0.5deg",
    },
    {
      name: "Tailwind CSS",
      Level: "Love It",
      icon: <RiTailwindCssFill color="#06B6D4" />,
      rotate: "0.8deg",
    },
    {
      name: "Javascript",
      Level: "Comfortable",
      icon: <IoLogoJavascript color="#F7DF1E" />,
      rotate: "-0.6deg",
    },
    {
      name: "React JS",
      Level: "Love It",
      icon: <FaReact color="#61DAFB" />,
      rotate: "1deg",
    },
    {
      name: "Node JS",
      Level: "Learning",
      icon: <FaNodeJs color="#339933" />,
      rotate: "0.4deg",
    },
    {
      name: "Express JS",
      Level: "Learning",
      icon: <SiExpress color="#000000" />,
      rotate: "-0.4deg",
    },
    {
      name: "Mongo DB",
      Level: "Learning",
      icon: <DiMongodb color="#47A248" />,
      rotate: "0.6deg",
    },
    {
      name: "Python",
      Level: "Kinda Good",
      icon: <FaPython color="#3776AB" />,
      rotate: "-1deg",
    },
    {
      name: "Figma",
      Level: "Love It",
      icon: <FaFigma color="#F24E1E" />,
      rotate: "0.2deg",
    },
  ];
  const tools = [
    {
      name: "Visual Studio Code",
      icon: <BiLogoVisualStudio color="#007ACC" />,
      rotate: "-1deg",
    },
    { name: "Zsh/Bash", icon: <SiGnubash color="#000000" />, rotate: "0.3deg" },
    { name: "Git", icon: <FaGitAlt color="#F05032" />, rotate: "0.8deg" },
    { name: "Github", icon: <FaGithub color="#181717" />, rotate: "-0.8deg" },
    { name: "Claude", icon: <BsClaude color="#C15F3C" />, rotate: "1deg" },
    {
      name: "Gemini",
      icon: <SiGooglegemini color="#1A73E8" />,
      rotate: "-0.8deg",
    },
    {
      name: "Vercel",
      icon: <IoLogoVercel color="#000000" />,
      rotate: "-0.2deg",
    },
    { name: "Markdown", icon: <FaMarkdown color="#000000" />, rotate: "1deg" },
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
      icon: <FaGithub color="#181717" />,
      href: "https://github.com/subhanali07",
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedin color="#0A66C2" />,
      href: "https://www.linkedin.com/in/muhammad-subhan-ali-931636278/",
    },
    {
      label: "Pinterest",
      icon: <FaPinterest color="#BD081C" />,
      href: "https://www.pinterest.com/subhanali200823/",
    },
    {
      label: "Instagram",
      icon: <FaInstagram color="#E4405F" />,
      href: "https://www.instagram.com/m_subhan_ali_/",
    },
    {
      label: "Twitter",
      icon: <BsTwitterX color="#000000" />,
      href: "https://x.com/subhanali070",
    },
    {
      label: "Chess",
      icon: <SiChessdotcom color="#7FA650" />,
      href: "https://www.chess.com/member/msubhan_ali",
    },
    {
      label: "Discord",
      icon: <FaDiscord color="#5865F2" />,
      href: "https://discord.com/users/1180081229819809822",
    },
  ];

  return (
    <>
      <section
        id="about"
        className="min-h-screen px-6 py-2 lg:px-8 lg:py-8 scroll-mt-20"
      >
        <div className="relative inline-block mb-12">
          <h1 className="font-hand font-bold text-ink text-6xl lg:text-7xl  2xl:text-8xl md:text-7xl">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10 lg:mb-16">
          <div className="md:col-span- flex justify-start">
            <div className="relative  border-[3px] border-ink rounded-lg shadow-[6px_6px_0px_0px_#1a1a1a] size-70 lg:size-110  2xl:mt-10 flex items-center justify-center text-6xl -rotate-3deg">
              <img src={StrollingDoodle} />
            </div>
          </div>
          <div className="font-mono md:col-span-2 text-xl 2xl:text-xl 2xl:mt-10  leading-relaxed text-ink space-y-4">
            <p>
              Hey, I'm{" "}
              <span className="font-hand font-bold text-ink lg:text-4xl  2xl:text-5xl">
                Subhan
              </span>
              - 18y/o, based in Karachi, Pakistan, I build things on the web and
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
          <h3 className="font-bold font-hand text-5xl 2xl:text-7xl  mb-6 text-ink">
            {" "}
            What I work with
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 2xl:gap-9">
            {skills.map((skill) => (
              <div
                key={skill.name}
                style={{ rotate: skill.rotate }}
                className="group bg-paper border-[3px]  border-ink 2xl:rounded-xl 2xl:border-[4px] 2xl:shadow-[6px_6px_0px_0px_#1a1a1a] rounded-lg px-4 py-5 shadow-[5px_5px_0px_0px_#1a1a1a] transition-all duration-150 ease-in-out cursor-default 2xl:hover:translate-x-1 2xl:hover:translate-y-1 hover:translate-x-0.75 hover:translate-y-0.75 2xl:hover:[shadow-2px_2px_0px_0px_#1a1a1a] hover:shadow-[2px_2px_0px_0px_#1a1a1a] hover:bg-[#FFE9A8]"
              >
                <div className="text-2xl text-ink  mb-5 2xl:text-5xl 2xl:mb-4">{skill.icon}</div>
                <p className="font-mono font-bold text-xl 2xl:text-3xl  text-ink">
                  {skill.name}
                </p>
                <p className="font-mono text-xs text-ink/60 mt-1  2xl:text-[16px]  group-hover:text-ink/80">
                  {skill.Level}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-16">
          <h3 className="font-hand  font-bold text-5xl 2xl:text-7xl text-ink mb-6">
            Tools &amp; Tech
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {tools.map((tool) => (
              <div
                key={tool.name}
                style={{ rotate: tool.rotate }}
                className="group bg-paper border-[3px] border-ink 2xl:rounded-xl 2xl:border-[4px] 2xl:shadow-[6px_6px_0px_0px_#1a1a1a] 2xl:hover:translate-x-1 2xl:hover:translate-y-1 2xl:hover:[shadow-2px_2px_0px_0px_#1a1a1a]  rounded-lg px-4 py-5 shadow-[5px_5px_0px_0px_#1a1a1a] transition-all duration-150 ease-in-out cursor-default hover:translate-x-0.75 hover:translate-y-0.75 hover:shadow-[2px_2px_0px_0px_#1a1a1a] hover:bg-[#8FCBE8]"
              >
                <div className="text-3xl text-ink  2xl:text-5xl mb-2">{tool.icon}</div>
                <p className="font-mono font-bold text-xl 2xl:text-3xl  text-ink">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-16">
          <h3 className="font-hand 2xl:text-7xl  font-bold text-5xl text-ink mb-6">
            Outside the screen
          </h3>
          <div className="flex flex-wrap gap-4">
            {interests.map((interest, i) => (
              <span
                key={interest.text}
                style={{ rotate: `${i % 2 === 0 ? "-1deg" : "1deg"}` }}
                className="font-mono font-bold text-lg 2xl:text-2xl border-2   2xl:border-3 border-ink rounded-full px-5 py-2 bg-paper hover:bg-[#FF9F5A] transition-colors duration-150 cursor-default flex items-center gap-2 2xl:shadow-[3px_3px_0px_0px_#1a1a1a] shadow-[2px_2px_0px_0px_#1a1a1a]"
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
          <h3 className="font-hand font-bold text-5xl 2xl:text-7xl  text-ink mb-6">
            Find me elsewhere<p className="text-xs lg:text-xl 2xl:text-2xl">(if u wanna check what i do)</p>
          </h3>
          <div className="flex flex-wrap gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 2xl:rounded-xl 2xl:border-[4px]  2xl:shadow-[6px_6px_0px_0px_#1a1a1a] 2xl:hover:translate-x-1 2xl:hover:translate-y-1 2xl:hover:[shadow-2px_2px_0px_0px_#1a1a1a] font-mono font-bold text-lg border-[3px] border-ink rounded-lg px-5 py-2.5 bg-[#FF9F5A] shadow-[4px_4px_0px_0px_#1a1a1a] transition-all duration-150 ease-in-out hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#1a1a1a]"
              >
                <span className="text-xl 2xl:text-3xl   ">{social.icon}</span>
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-end">
          <button
            onClick={() => setnicheRevealed(!nicheRevealed)}
            className="text-xl font-mono text-ink/30 hover:text-ink/60 transition-colors cursor-pointer"
            aria-label="secret"
          >
            {nicheRevealed ? "okay fine, I'm not THAT niche." : "psst →"}
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
