import Logosa from "../assets/Logosa.svg"

import SALOGO from "../assets/SALOGO.svg"


const Navbar = () => {
  const links = [
    {label:"About", href:"#about"},
    {label:"Projects", href:"#projects"},
    {label:"Contact", href:"#contact"}

  ]
  return (
    <>
    <nav className="w-full fixed top-0 left-0 z-50 bg-paper border-b-10 shadow-[4px_4px_0px_0px_ink]  border-ink ">
      <div classname="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <img src={SALOGO} alt="logo" className=" text-xl"  /><a href="#home"/>
      </div>
      
    </nav>
    </>
  )
}

export default Navbar