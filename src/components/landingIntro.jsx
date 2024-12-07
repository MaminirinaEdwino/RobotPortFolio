import { motion } from "motion/react"

export default function LandingIntro() {
  return (
    
    <section className="text-white backdrop-blur-xl min-h-[300px] m-2 flex flex-col justify-around bg-white/1 p-5 rounded-2xl ">
      <h1 className="text-4xl font-bold">HI, I'm Edwino</h1>
      <p className="">I'm a Web Developper and Welcome To My Page</p>
      <p className="mb-5">
        And If you want to More you can navigate in the page, and I hope you will like it !
      </p>
      <div className="space-x-10">
        <motion.a 
        initial={{
          height:0
        }}
        whileInView={{
          height:"auto",
          transition:{
            duration: .5
          }
        }}
        href="#aboute_me" className=" overflow-hidden p-2 px-5 hover:border transition-all duration-200 box-border bg-blue-600 rounded-lg">
          More
        </motion.a>
        <motion.a 
        initial={{
          height:0
        }}
        whileInView={{
          height:"auto",
          transition:{
            duration: .5
          }
        }}
        href="#contacts" className=" overflow-hidden p-2 px-5 hover:border transition-all duration-200 box-border bg-blue-600 rounded-lg">
          Contact
        </motion.a>
      </div>
    </section>
  );
}
