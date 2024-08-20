import { projects } from "../data";
import Project from "./Project";

function Projects() {
  return (
    <section id="projects" className="mb-20">
      <h2 className="font-medium inline-block text-3xl pb-1 mb-5 bg-gradient-to-r from-[#2e3f4663] via-[#F1D0D0] to-[#918f88cb] bg-[length:100%_4px] bg-no-repeat bg-bottom">Projects
      </h2>
      <ul className="grid grid-cols-2 gap-8 justify-items-center place-self-center mx-auto">
        {projects.map((project) => (
          <Project key={project.id} {...project}/>
        ))}
      </ul>
    </section>
  )
}

export default Projects