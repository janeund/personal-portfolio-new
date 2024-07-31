import { projects } from "../data";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul className="grid grid-cols-2">
        {projects.map((project) => (
          <li key={project.id} className="p-4">
          <h3>{project.title}</h3>
          <img src={project.image} alt="" />
          <p>{project.description}</p>
          <ul>
            {project.stack.map((tool, index) => (
              <li key={`tool-${index}`}>{tool}</li>
            ))}
          </ul>
        </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects