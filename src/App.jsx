import { Navbar, Hero, Skills, Projects } from './components'

function App() {

  return (
    <div className='container mx-auto px-4 max-w-4xl'>
      <Navbar/>
      <Hero />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
