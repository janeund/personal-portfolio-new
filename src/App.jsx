import { Navbar, Hero, Skills, Projects, Experience, Footer } from './components'

function App() {

  return (
    <div className="relative wrapper bg-[#f0f0f0] -z-30 overflow-hidden">
      <div className="absolute -z-10 min-w-[900px] max-w-[2000px] min-h-[400px] top-0 left-0 right-0 mx-auto bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100 via-[#f0f0f0] to-[#f0f0f0]"></div>
      <div className='relative container mx-auto px-4 max-w-3xl'>    
        <div className="-z-20">  
        <Navbar/>
        <Hero />
        </div>
        <Projects />
        <Experience />
        <Footer />
      </div>
    </div>
  )
}

export default App
