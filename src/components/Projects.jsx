import { projects } from "../data";
import Project from "./Project";

function Projects() {
  return (
    <section id="projects" className="mb-20">
      <h2 className="font-medium inline-block text-3xl pb-1 mb-5 bg-gradient-to-r from-orange-300 via-amber-200 to-red-300 bg-[length:100%_4px] bg-no-repeat bg-bottom">Projects
      </h2>
      <ul className="grid grid-cols-2 max-w-3xl gap-7 justify-items-center place-self-center mx-auto">
        {projects.map((project) => (
          <Project key={project.id} {...project}/>
        ))}
      </ul>
    </section>
  )
}

export default Projects