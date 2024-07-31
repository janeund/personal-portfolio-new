import { useState } from "react";
import { navLinks } from "../data";
import { TbCat } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex justify-between py-6">
      <div className="">
        <a href="#">
          <TbCat />
        </a>
      </div>
      <ul className="sm:flex hidden">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`cursor-pointer text-lg ${index === navLinks.length - 1 ? 'mr-0': 'mr-10'}`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
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

