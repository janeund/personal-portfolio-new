import { socialPages } from '../data';

function Social() {
  return (
    <div className='flex items-center'>
      <ul className='list-none flex gap-2 text-xl'>
        {socialPages.map((item, index) => (
          <li className='cursor-pointer border hover:bg-stone-950 hover:text-white ease-in-out duration-500 bg-white border-gray-300 rounded-full p-3' key={`social-${index}`}>
            <a href={item.link} target='_blank'>{<item.icon />}</a>   
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Social