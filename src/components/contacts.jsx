import { useState } from "react";
import { BiEnvelopeOpen, BiLogoFacebookCircle, BiPhone } from "react-icons/bi";
import Contact from "./contact";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Contacts() {
  const [contactList, setContact] = useState([
    {
      title: "Phone number",
      contact: "+261 34 78 829 25",
      icon: <BiPhone />,
      link: "#",
    },
    {
      title: "Email",
      contact: "edwinomaminirina@gmail.com",
      icon: <BiEnvelopeOpen />,
      link: "#",
    },
    {
      title: "Facebook",
      contact: "Edwino Rafitoarisoa",
      icon: <BiLogoFacebookCircle />,
      link: "https://web.facebook.com/edwino.rafitoarisoa",
    },
    {
      title: "LinkedIn",
      contact: "Edwino Maminirina",
      icon: <BsLinkedin />,
      link: "https://www.linkedin.com/in/edwino-maminirna-798689275/",
    },
  ]);
  return (
    <section className="w-full h-dvh mt-20 pt-16 p-5">
      <h1 className="text-white text-5xl font-bold ">
        You can Contact me with my :{" "}
      </h1>
      <div className="backdrop-blur bg-blue-300/10 p-5 w-[100%] md:w-[50%] mt-10 rounded-2xl">
        {contactList.map((contact, i) => (
          <Contact
            title={contact.title}
            contact={contact.contact}
            icon={contact.icon}
            link={contact.link}
          />
        ))}
        <h1 className="flex items-center text-2xl p-5 text-white  space-x-1">
        For more, this is my GitHub Profile
          <a className="px-2" href="https://github.com/MaminirinaEdwino/">
            <BsGithub />
          </a> 
        </h1>
      </div>
    </section>
  );
}
