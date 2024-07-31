import { techSkills } from "../data";

function Skills() {
  return (
    <div>
      <h2>Technologies and Tools</h2>
      <ul>
        {techSkills.map((skill, index) => (
          <li key={skill.id} className={`cursor-pointer text-sm ${index === techSkills.length - 1 ? 'mr-0' : 'mr-10'}`}>
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills