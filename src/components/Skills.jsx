import { techSkills } from "../data";

function Skills() {
  return (
    <div className="mb-10 max-w-4xl container">
      <h2 className="font-medium text-smxl mb-5">Technologies and tools which i'm using</h2>
      <ul className="flex">
        {techSkills.map((skill, index) => (
          <li key={skill.id} className={`flex items-center cursor-pointer p-3 bg-stone-200 text-base rounded-lg ${index === techSkills.length - 1 ? 'mr-0' : 'mr-3'}`}>
            {skill.name}
            {<skill.icon />}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills