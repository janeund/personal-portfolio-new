import { techSkills } from "../data";


function Skills() {
  return (
    <section className="mb-10 max-w-4xl container">
      <h2 className="font-medium text-3xl mb-5">Technologies and Tools</h2>
      <ul className="flex">
        {techSkills.map((skill, index) => (
          <li key={skill.id} className={`cursor-pointer p-3 bg-stone-200 text-base rounded-lg ${index === techSkills.length - 1 ? 'mr-0' : 'mr-8'}`}>
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills