import { photo, CV } from "../assets";
import { RxDownload } from "react-icons/rx";
import Skills from "./Skills";
import Social from "./Social";

function Hero() {
  return (
    <section id="hero" className='container mx-auto max-w-xl mb-20 z-10 relative'>
      <div className="flex justify-between">
        <div className="info max-w-sm mb-4">
          <h1 className="text-4xl font-medium">Hello! I'm Evgeniia, </h1>
          <p className="font-medium text-lg">Junior Frontend Developer based in Oslo.</p>
          <p className="mt-2 text-base">I'm a self-taught developer with backround in video games marketing.</p>
        </div>
        <img src={photo} alt="profile photo" className="shadow-xl max-w-32 max-h-32 rounded-full border border-gray-400"/>
      </div>
      <div className="flex items-center gap-3">
        {/* <Skills /> */}
        <button className="py-2 px-4 border bg-white font-[450] border-gray-300 rounded-full flex items-center gap-1">Download CV <RxDownload className="font-bold text-[0.8rem]" /> </button>
        <Social />
      </div>
    </section>
  )
}

export default Hero