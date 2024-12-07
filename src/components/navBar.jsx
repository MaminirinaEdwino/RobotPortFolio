import { motion } from "motion/react"

export default function NavBar() {
  return (
    
    <motion.nav 
    initial={{
      opacity:0,
      y:-100
    }}
    animate={{
      opacity:1,
      y:0,
      transition: {
        duration: .5
      }
    }}
    whileTap={{
      height:70
    }}
    className="z-10 border-b border-blue-600 h-14 fixed w-full items-center flex pr-1 justify-between backdrop-blur bg-white/.01 text-white text-xs sm:text-lg">
      <div className="flex flex-col px-2 font-bold select-none">
        <span>EDWINO</span>
        <span>MAMINRINA</span>
      </div>
      <a href="#home" className="border-b hover:text-blue-400 hover:font-bold hover:border-t transition-all duration-200">HOME</a>
      <a href="#about_me"  className="border-b hover:text-blue-400 hover:font-bold hover:border-t transition-all duration-200">ABOUT ME</a>
      <a href="#skills" className="border-b hover:text-blue-400 hover:font-bold hover:border-t transition-all duration-200">SKILLS</a>
      <a href="#projects" className="border-b hover:text-blue-400 hover:font-bold hover:border-t transition-all duration-200">PROJECTS</a>
      <a href="#contacts" className="border-b hover:text-blue-400 hover:font-bold hover:border-t transition-all duration-200">CONTACTS</a>
    </motion.nav>
  );
}
