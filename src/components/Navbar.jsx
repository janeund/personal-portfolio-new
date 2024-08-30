import { useState } from "react";
import { navLinks } from "../data";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex py-8 mb-14 max-w-4xl container mx-auto justify-between relative">
      <div className="flex-1 flex items-center">
        <a href="#" className="font-bold text-lg">
          ezh
        </a>
      </div>
      <ul className="z-10 sm:flex hidden py-2 px-5 rounded-full bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg shadow-sm">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`hover:bg-neutral-200 hover:rounded-full ease-in-out duration-500 cursor-pointer font-[430] py-2 px-4 text-base ${index === navLinks.length - 1 ? 'mr-0': 'mr-5'}`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="z-20 sm:hidden justify-end flex flex-1 items-center">
        <div onClick={() => setToggle((prev) => !prev)}>
          {toggle ? <IoClose /> : <RxHamburgerMenu />}
        </div>
        <div className={`${toggle ? 'flex' : 'hidden'} absolute p-6 right-0 top-20 min-w-[140px] w-full h-72 max-[380px]:h-[25rem] max-[500px]:h-96 rounded-xl bg-white drop-shadow-xl`}>
        <ul className="flex flex-col justify-center items-center mx-auto">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`cursor-pointer font-medium max-[330px]:text-[1.5rem] text-3xl ${index === navLinks.length - 1 ? 'mb-0':'mb-4'}`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar

