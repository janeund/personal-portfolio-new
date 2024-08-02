import { socialPages } from '../data';

function Social() {
  return (
    <div>
      <ul className='list-none flex gap-3 text-3xl mb-5'>
        {socialPages.map(item => (
          <li>{<item.icon />}</li>
        ))}
      </ul>
    </div>
  )
}

export default Social