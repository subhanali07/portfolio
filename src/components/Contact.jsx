import girl from "../assets/girl.jpg"
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";



const Contact = () => {
  const socials = [
    { name: "Discord" , icon: <FaDiscord color="#5865F2"/>, href:"https://discord.com/users/1180081229819809822" },
    { name: "Instagram", icon:<FaInstagram color="#E4405F" />, href: "https://www.instagram.com/m_subhan_ali_/"},
    { name: "Gmail", icon:<SiGmail  color="#D14836" />, href:"mailto:subhanali200823@gmail.com"}


  ]
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
        <div className="w-114 h-130 lg:w-200 lg:h-95 bg-paper border-4 rounded-xl shadow-[6px_6px_0px_0px_#1a1a1a] 2xl:w-200 ">
          <p className="mt-3 ml-9 mr-9 text-ink/70 text-sm lg:text-xl 2xl:text-2xl font-mono">there u go these are my mail address and some socials im chronically active on</p>
          <div>{socials.map((social) => (<a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 2xl:rounded-xl 2xl:border-[6px] my-4 mx-4 w-190 h-18  2xl:shadow-[6px_6px_0px_0px_#1a1a1a] 2xl:hover:translate-x-1 2xl:hover:translate-y-1 2xl:hover:[shadow-2px_2px_0px_0px_#1a1a1a] font-mono font-bold text-lg border-[3px] border-ink rounded-lg bg-[#FF9F5A] shadow-[4px_4px_0px_0px_#1a1a1a] transition-all duration-150 ease-in-out hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#1a1a1a]"
>
             <span className="text-xl 2xl:text-3xl   ">{social.icon}</span>
                {social.name}

          </a>

          ))}</div>
        </div>
      </section>
    </>
  );
};

export default Contact;
