import { projects } from "../data";

function Project() {
  return (
    <li key={project.id}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul>
        {project.stack.map((tool, index) => (
          <li key={`tool-${index}`}>{tool}</li>
        ))}
      </ul>
    </li>
  )
}

export default Project