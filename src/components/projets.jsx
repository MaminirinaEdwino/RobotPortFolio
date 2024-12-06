import Project from "./project"

export default function Projects() {
    const listProject = [
        {
            "title": "Propaganda WebSite",
            "link": "https://onymbolasoa.vercel.app/"
        },
        {
            "title": "DominoPRO",
            "link": "https://dominoed.vercel.app/"
        },
        {
            "title": "QRCode Generator",
            "link": "https://qred-six.vercel.app/.well-known/vercel/toolbar?path=%2F%3FvercelToolbarCode%3Dz2By1mqdaXgAsnS"
        }
    ]
    return <section>
        <h1 className="text-5xl text-white font-bold text-center mt-10 mb-10">PROJECTS</h1>
        <div className="flex flex-wrap gap-5 justify-around">
            {listProject.map((project, i)=><Project title={project.title} link={project.link} key={project.link+i}/>)}
        </div>

    </section>
}