import { photo, CV } from "../assets";
import { RxDownload } from "react-icons/rx";
import Social from "./Social";

function Hero() {
  return (
    <section id="hero" className='container mx-auto max-w-xl mb-20 z-10 relative'>
      <div className="flex justify-between">
        <div className="info max-w-sm mb-4">
          <h1 className="text-4xl font-medium">Hello! I&apos;m Evgeniia, </h1>
          <p className="font-medium text-lg">Frontend Developer based in Oslo.</p>
          <p className="mt-2 text-base">Ex-video games marketing specialist, now a developer building for the web at an agency in Oslo.</p>
        </div>
        <img src={photo} alt="profile photo" className="shadow-xl max-w-32 max-h-32 rounded-full border border-gray-400"/>
      </div>
      <div className="flex items-center gap-3">
        <a href={CV} target="_blank" download="CV_evgeniia_zhavoronkova" className="hover:bg-stone-950 hover:text-white ease-in-out duration-500 py-3 px-5 border bg-white font-[430] border-gray-300 rounded-full flex items-center gap-1">Download CV <RxDownload className="text-[0.8rem]" /> </a>
        <Social />
      </div>
    </section>
  )
}

export default Hero