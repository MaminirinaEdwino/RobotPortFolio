import { FaBlender, FaCss3, FaGolang, FaPhp, FaReact, FaSymfony } from "react-icons/fa6";
import { SiFastapi, SiGodotengine, SiJavascript, SiPython, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";
import SKillsDetails from "./skillsDetails";
import { motion } from "motion/react";
import { BsMarkdownFill } from "react-icons/bs";
import { GiBlender } from "react-icons/gi";
import { BiLogoBlender } from "react-icons/bi";
import { PiFileCpp } from "react-icons/pi";
import { DiJavascript } from "react-icons/di";
import { MdJavascript } from "react-icons/md";
import { useState } from "react";

export default function Skills() {
  const [listSkills, setList] = useState([
    {
      title: "ReactJS",
      icon: <FaReact />,
    },
    {
      title: "FastAPI",
      icon: <SiFastapi />,
    },
    {
      title: "TailwindCSS",
      icon: <SiTailwindcss />,
    },
    {
      title: "Symfony",
      icon: <FaSymfony />,
    },
    {
      title: "ViteJS",
      icon: <SiVite />,
    },
    {
      title: "Godot Engine",
      icon: <SiGodotengine />,
    },
    {
      title: "Blender",
      icon: <BiLogoBlender />,
    },
    {
      title: "MarkDown",
      icon: <BsMarkdownFill />,
    },
    {
      title: "CSS 3",
      icon: <FaCss3 />,
    },
    {
      title: "PHP",
      icon: <FaPhp />,
    },
    {
      title: "Golang",
      icon: <FaGolang />,
    },
    {
      title: "C++",
      icon: <PiFileCpp />,
    },
    {
      title: "Javascript",
      icon: <SiJavascript />,
    },
    {
      title: "Typescript",
      icon: <SiTypescript />,
    },
    {
      title: "Python",
      icon: <SiPython />,
    },
  ])
  return (
    <section className="mt-20" id="skills">
      <motion.h1
        initial={{
          width: 0,
        }}
        whileInView={{
          width: "auto",
          transition: {
            transition: 2,
          },
        }}
        className="text-white font-bold text-5xl text-center"
      >
        SKILLS
      </motion.h1>
      <div className="w-full p-5 flex flex-wrap gap-10  justify-around">
        {listSkills.map((skill, i) => (
          <SKillsDetails
            title={skill.title}
            icon={skill.icon}
            key={skill.title + i}
          />
        ))}
      </div>
    </section>
  );
}
