import React from 'react';
import { useState } from 'react';
import { FaHtml5, FaCss3, FaPython, FaReact, FaFigma, FaNodeJs, FaGitAlt, FaGithub, FaMarkdown, FaCode, FaBook, FaLinkedin, FaPinterest, FaInstagram, FaDiscord,} from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { SiChessdotcom, SiExpress, SiGnubash, SiGooglegemini } from 'react-icons/si';
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { BiLogoVisualStudio, BiMovie } from 'react-icons/bi';
import { BsClaude } from 'react-icons/bs';
import { FaDumbbell, FaTwitter } from 'react-icons/fa6';
import { href } from 'react-router-dom';
import { PiPinterestLogo } from 'react-icons/pi';
const About = () => {
  const [nicheRevealed, setnicheRevealed] = useState(false)
  const skills = [
    {name: "HTML", Level:"Comfortable", icon:<FaHtml5 />, rotate:"-1deg"},
    {name: "CSS", Level:"Comfortable", icon:<FaCss3/>, rotate:"0.5deg"},
    {name: "Tailwind CSS", Level:"Love It", icon:<RiTailwindCssFill />, rotate:"0.8deg"},
    {name: "Javascript", Level:"Comfortable", icon:<IoLogoJavascript />, rotate:"-0.6deg"},
    {name: "React JS", Level:"Love It", icon:<FaReact />, rotate:"1deg"},
    {name: "Node JS", Level:"Learning", icon:<FaNodeJs />, rotate:"0.4deg"},
    {name: "Express JS", Level:"Learning", icon:<SiExpress />, rotate:"-0.4deg"},
    {name: "Mongo DB", Level:"Learning", icon:<DiMongodb />, rotate:"0.6deg"},
    {name: "Python", Level:"Kinda Good", icon:<FaPython />, rotate:"-1deg"},
    {name: "Figma", Level:"Love It", icon:<FaFigma />, rotate:"0.2deg"},

  ]
  const tools = [
    {name:"Visual Studio Code", icon: <BiLogoVisualStudio /> , rotate:"-1deg"},
    {name:"Zsh/Bash", icon:<SiGnubash/>, rotate:"0.3deg"},
    {name:"Git",icon:<FaGitAlt/>, rotate:"0.8deg"},
    {name:"Github", icon:<FaGithub/>, rotate:"-0.8deg"},
    {name:"Claude", icon:<BsClaude/>, rotate:"1deg"},
    {name:"Gemini", icon:<SiGooglegemini/>, rotate:"-0.8deg"},
    {name:"Vercel", icon:<IoLogoVercel/>, rotate:"-0.2deg"},
    {name:"Markdown", icon:<FaMarkdown/>, rotate:"1deg"}
  ]
  const interest =[
    `${<FaCode/>} Coding`,
    `${<BiMovie/>} Watching Movies`,
    `${<SiChessdotcom/>} Playing Chess`,
    `${<FaBook/>} Reading Book(rarely, but it happens)`,
    `${<FaDumbbell/>} and yeah i like to hit the gym too`
  ]
  const socials = [
    {label:"Github", icon:<FaGithub/>, href:"https://github.com/subhanali07"},
    {label:"LinkedIn", icon:<FaLinkedin/>, href:"https://www.linkedin.com/in/muhammad-subhan-ali-931636278/"},
    {label:"Pinterest", icon:<FaPinterest/>, href:"https://www.pinterest.com/subhanali200823/"},
    {label:"Instagram", icon:<FaInstagram/>, href:"https://www.instagram.com/m_subhan_ali_/"},
    {label:"Twitter", icon:<FaTwitter/>, href:"https://x.com/subhanali070"},
    {label:"Chess", icon:<SiChessdotcom/>, href:"https://www.chess.com/member/msubhan_ali"},
    {label:"Discord", icon:<FaDiscord/>, href:"https://discord.com/users/1180081229819809822"}


  ]

  return (
    <>
    <section id="#about"
    className="min-h-screen max-w-7xl px-6 py-20 scroll-mt-20">
      <div className='relative inline-block mb-12'>
        <h1 className='font-hand font-bold text-ink text-5xl md:text-6xl'>About me</h1>
        <svg
          className="absolute -bottom-2 left-0 w-full"
          viewBox="0 0 300 16"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M5 10 Q60 2 120 10 Q180 18 240 6 Q270 2 295 10"
            stroke="#FF9F5A"
            strokeWidth="9"
            strokeLinecap="round"
            fill=""
          />
        </svg>

      </div>


    </section>
    </>
    )
}

export default About