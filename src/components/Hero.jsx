import { photo, CV } from "../assets";

function Hero() {
  return (
    <section id="home" className='max-w-xl container flex mx-auto justify-between mb-10'>
      <div className="info max-w-md">
        <h1 className="text-4xl font-medium">Evgeniia Zhavoronkova</h1>
        <p className="">Junior Frontend Developer</p>
        <p className="text-zinc-400 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, illum!</p>
      </div>
      <img src={photo} alt="profile photo" className="max-w-32 rounded-full"/>
    </section>
  )
}

export default Hero