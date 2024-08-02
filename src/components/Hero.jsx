import { photo, CV } from "../assets";
import Skills from "./Skills";
import Social from "./Social";

function Hero() {
  return (
    <section id="hero" className='container mx-auto max-w-xl mb-20'>
      <div className="flex justify-between">
        <div className="info max-w-sm">
          <h1 className="text-3xl font-medium">Hello! I'm Evgeniia, </h1>
          <p className="font-medium ">Junior Frontend Developer based in Oslo.</p>
          <p className="mt-2">I'm a self-taught developer with backround in video games marketing.</p>
        </div>
        <img src={photo} alt="profile photo" className="max-w-32 rounded-full"/>
      </div>
      <div>
        <Social />
        {/* <Skills /> */}
      </div>
    </section>
  )
}

export default Hero