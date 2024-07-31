import { photo, CV } from "../assets";

function Hero() {
  return (
    <section id="home" className='max-w-[800px] container flex mx-auto justify-between'>
      <div className="info">
        <h1 className="text-4xl font-bold">Evgeniia Zhavoronkova</h1>
        <p className="font-bold">Junior Frontend Developer</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, illum!</p>
      </div>
      <img src={photo} alt="profile photo" className="max-w-36 rounded-full"/>
    </section>
  )
}

export default Hero