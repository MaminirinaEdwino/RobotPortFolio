import { motion } from "motion/react";
import FondVideo from "./fondVideo";
import LandingIntro from "./landingIntro";

export default function LandingPage() {
    
    return <div className="flex h-dvh" id="home">
        <FondVideo />
        <motion.div 
        initial={{
            width:0,
            opacity: 0
        }}
        whileInView={{
            width: "auto",
            opacity: 1,
            transition:{
                duration: 1
            }
        }}
        className="m-auto my-auto overflow-hidden">
            <LandingIntro/>
        </motion.div>
    </div>
}