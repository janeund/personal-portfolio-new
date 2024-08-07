import { useState } from "react";
import { navLinks } from "../data";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex py-8 mb-8 max-w-4xl container mx-auto justify-between">
      <div className="">
        <a href="#" className="font-bold">
          ezh
        </a>
      </div>
      <ul className="sm:flex hidden py-2 px-5 rounded-full bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`cursor-pointer p-1 text-base ${index === navLinks.length - 1 ? 'mr-0': 'mr-8'}`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 items-center">
        <div onClick={() => setToggle((prev) => !prev)}>
          {toggle ? <IoClose /> : <RxHamburgerMenu />}
        </div>
        <div className={`${toggle ? 'flex' : 'hidden'} absolute p-6 right-0 top-20 min-w-[140px] w-fit rounded-xl bg-slate-300`}>
        <ul className="flex flex-col">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`cursor-pointer text-lg ${index === navLinks.length - 1 ? 'mb-0':'mb-4'}`}
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

