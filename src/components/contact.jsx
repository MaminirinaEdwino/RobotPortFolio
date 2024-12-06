export default function Contact({title, contact, icon, link}) {
    return <article className="flex w-full text-white ">
        <span className="flex items-center gap-1 w-40 font-bold text-blue-700  text-lg">{icon} {title} </span>  <a href={link} className="">{contact}</a>
    </article>
}