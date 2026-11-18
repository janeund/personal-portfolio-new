import { useEffect, useRef, useState } from "react";
import { navLinks } from "../data";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const navRef = useRef(null);

  // Close the mobile menu on Esc or a tap outside it
  useEffect(() => {
    if (!toggle) return;
    const onKey = (e) => e.key === "Escape" && setToggle(false);
    const onClick = (e) => !navRef.current?.contains(e.target) && setToggle(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [toggle]);

  return (
    <nav ref={navRef} className="flex py-8 mb-14 max-w-4xl container mx-auto justify-between relative">
      <div className="flex-1 flex items-center">
        <a href="#" className="font-bold text-lg">
          ezh
        </a>
      </div>
      <ul className="z-10 sm:flex hidden py-2 px-5 rounded-full bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg shadow-xs">
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
        <button
          type="button"
          onClick={() => setToggle((prev) => !prev)}
          aria-label={toggle ? "Close menu" : "Open menu"}
          aria-expanded={toggle}
          aria-controls="mobile-menu"
          className="-mr-3 flex h-11 w-11 items-center justify-center rounded-full text-xl hover:bg-neutral-200 transition-colors"
        >
          {toggle ? <IoClose /> : <RxHamburgerMenu />}
        </button>
        <div
          id="mobile-menu"
          className={`${toggle ? 'flex' : 'hidden'} absolute right-0 top-20 w-full rounded-xl bg-white px-6 py-8 drop-shadow-xl`}
        >
          <ul className="flex flex-col items-center mx-auto gap-2">
            {navLinks.map((nav) => (
              <li key={nav.id} className="font-medium text-2xl max-[330px]:text-xl">
                <a
                  href={`#${nav.id}`}
                  onClick={() => setToggle(false)}
                  className="block px-4 py-2 rounded-full hover:bg-neutral-100"
                >
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
