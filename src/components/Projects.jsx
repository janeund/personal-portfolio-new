import { projects } from "../data";

function Projects() {
  return (
    <section id="projects">
      <h2 className="font-medium text-3xl">Personal Projects</h2>
      <ul className="grid grid-cols-2 gap-5">
        {projects.map((project) => (
        <li key={project.id} className="p-5 bg-gray-50 rounded-sm">
          <img src={project.image} alt="" />
          <h3 className="font-medium">{project.title}</h3>
          <p>{project.description}</p>
          <ul>
            {project.stack.map((tool, index) => (
              <li className={`cursor-pointer inline-block p-3 bg-stone-200 text-base rounded-lg ${index === project.stack.length - 1 ? 'mr-0' : 'mr-8'}`} key={`tool-${index}`}>{tool}</li>
            ))}
          </ul>
        </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects