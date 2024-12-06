import { FaReact, FaSymfony } from "react-icons/fa6";
import { SiFastapi, SiTailwindcss, SiVite } from "react-icons/si";
import SKillsDetails from "./skillsDetails";

export default function Skills() {
  const listSkills = [
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
  ];
  return (
    <section className="mt-20">
      <h1 className="text-white font-bold text-5xl text-center">SKILLS</h1>
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
