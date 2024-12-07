import { BiBrain } from "react-icons/bi"
import { CiLocationArrow1 } from "react-icons/ci"
import { PiStudent } from "react-icons/pi"
import DetailsInformation from "./detailInformation"
import { motion } from "motion/react"
import { useState } from "react"

export default function AboutMe() {
    const [informationList, setInfo]=useState([
        {
            "title": "My name's ",
            "details": "RAFITOARISOA Maminirina Edwino",
            "icon": <PiStudent/>
        },
        {
            "title": "Come from",
            "details": "Madagascar",
            "icon": <CiLocationArrow1/>
        },
        {
            "title": "I'm studying",
            "details": "Software Engeneering, AI and Web Developpement",
            "icon":<BiBrain/>
        }
    ]) 
    return <section className="w-full h-dvh pt-16 flex flex-col mb-52" id="about_me">
        
        <motion.h1 
        initial={{
            width:0
        }}
        whileInView={{
            width: "auto",
            transition:{
                transition: 2,
            }
        }}

        className="text-white text-5xl  font-bold text-center mb-10">ABOUT ME</motion.h1>
        {informationList.map((info, i)=><DetailsInformation title={info.title} details={info.details} icons={info.icon} key={info.title+i} position={i}/>)}
    </section>
}