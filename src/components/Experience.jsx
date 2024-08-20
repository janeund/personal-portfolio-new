import { experience } from "../data";

function Experience() {
  return (
    <section id='experience' className="mb-20">
      <h2 className="font-medium inline-block text-3xl pb-1 mb-5 bg-gradient-to-r from-[#2e3f4663] via-[#F1D0D0] to-[#918f88cb] bg-[length:100%_4px] bg-no-repeat bg-bottom">Experience</h2>
      
<ul className="relative mx-auto border-s border-x-gray-300 dark:border-gray-700">                  
    {/* <li class="mb-9 ms-4">
        <div class="absolute w-3 h-3 bg-orange-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
        <p class="mb-4 text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
    </li> */}

    {experience.map((job, index) => (
      <li key={job.id} className="mb-8 ms-4">
        <div className="absolute w-3 h-3 bg-[#F1D0D0] rounded-full border-gra mt-1.5 -start-1.5 border border-white"></div>
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