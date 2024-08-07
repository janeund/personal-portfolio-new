import { Navbar, Hero, Skills, Projects, Experience, Footer } from './components'

function App() {

  return (
    <div className="wrapper bg-[#f0f0f0] -z-30 overflow-hidden">
      {/* <div className="absolute -z-10 min-w-[900px] max-w-[2000px] min-h-[400px] top-0 left-0 right-0 mx-auto bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100 via-[#f0f0f0] to-[#f0f0f0]"></div>
      <div className="absolute -z-10 min-w-[900px] max-w-[2000px] min-h-[400px] bottom-0 left-0 right-0 mx-auto bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-100 via-[#f0f0f0] to-[#f0f0f0]"></div> */}
      <div className='container mx-auto px-4 max-w-3xl'>   
         
      
        <Navbar/>
        <Hero />
        
        <Projects />
        <Experience />
        <Footer />
      </div>
    </div>
  )
}

export default App
