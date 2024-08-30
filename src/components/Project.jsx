import { projects } from "../data";
import { SiGithub } from "react-icons/si";
import { TfiWorld } from "react-icons/tfi";

function Project({id, title, description, image, stack, demo, github}) {
  return (
    <li key={id} className="py-7 px-6 bg-white rounded-xl drop-shadow-xl max-md:max-w-md">
      <div className="min-h-52">
        <img src={image} alt={title} className="mb-4"/>
      </div>
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="mb-3 text-[15px] leading-5 min-h-16">{description}</p>
      <ul className="flex gap-2 flex-wrap mb-7">
        {stack.map((tool, index) => (
          <li key={`tool-${index}`} className='text-sm py-1 px-2 border border-neutral-400 rounded-md flex gap-2 items-center'>
            {<tool.icon  />}{tool.name}
          </li>
        ))}
      </ul>
      
      <div className="flex gap-3 justify-end">
        <a className="inline-flex gap-1 cursor-pointer items-center underline-offset-4 underline decoration-1 hover:decoration-transparent hover:text-sky-900 transition-all" target="_blank" href={demo}><TfiWorld /> View live</a>
        <a className="inline-flex gap-1 cursor-pointer items-center underline-offset-4 underline decoration-1 hover:decoration-transparent hover:text-sky-900 transition-all" target="_blank" href={github}><SiGithub /> Repository </a>
      </div>
    </li>
  )
}

export default Project