import { projects } from "../data";

function Project({id, title, description, image, stack, demo, github}) {
  return (
    <li key={id} className="py-8 px-6 bg-white rounded-xl drop-shadow-xl">
      <img src={image} alt={title} className="mb-4"/>
      <h3 className="font-medium mb-3">{title}</h3>
      <p className="mb-3">{description}</p>
      <ul>
        {stack.map((tool, index) => (
          <li key={`tool-${index}`} className={`cursor-pointer inline-block p-2 text-base rounded-xl border-solid border-2 border-black ${index === stack.length - 1 ? 'mr-0' : 'mr-3'}`}>{tool}</li>
        ))}
      </ul>
    </li>
  )
}

export default Project