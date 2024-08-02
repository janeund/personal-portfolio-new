import { experience } from "../data";

function Experience() {
  return (
    <section id='experience' className="mb-10">
      <h2 className="font-medium text-3xl mb-5">Experience</h2>
      
<ul class="relative max-w-3xl mx-auto border-s border-gray-400 dark:border-gray-700">                  
    {/* <li class="mb-9 ms-4">
        <div class="absolute w-3 h-3 bg-orange-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
        <p class="mb-4 text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
    </li> */}

    {experience.map((job, index) => (
      <li key={job.id} className="mb-6 ms-4">
        <div className="absolute w-3 h-3 bg-orange-100 rounded-full mt-1.5 -start-1.5 border border-white"></div>
        <h3 className="text-lg font-semibold text-gray-900">{job.position}</h3>
        <div className="text-base font-medium leading-none text-gray-900">{job.company}</div>
        <time className="mb-3 text-sm font-normal text-gray-400">{job.period}</time>
        
        <p className="mb-4 text-gray-500">{job.description}</p>
      </li>
    ))}

</ul>


    </section>
  )
}

export default Experience