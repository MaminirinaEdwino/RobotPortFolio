import { motion } from "motion/react";
export default function SKillsDetails({title,icon, i}) {
    return <motion.article 
    initial={{
        opacity: 0
    }}
    whileInView={{
        opacity:1,
        transition:{
            delay:i+1,
            duration:1
        }
    }}
    className="text-white flex flex-col justify-center items-center w-52 border border-blue-700 h-52 rounded-2xl backdrop-blur-sm bg-blue-400/10 hover:text-blue-700 transition-all duration-200">
        <div className="text-9xl">{icon}</div>
        <h1 className="text-3xl">{title}</h1>
    </motion.article>
}