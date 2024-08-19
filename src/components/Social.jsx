import { socialPages } from '../data';

function Social() {
  return (
    <div className='flex items-center'>
      <ul className='list-none flex gap-2 text-xl'>
        {socialPages.map((item, index) => (
          <li className='border bg-white border-gray-300 rounded-full p-2' key={`social-${index}`}>{<item.icon />}</li>
        ))}
      </ul>
    </div>
  )
}

export default Social