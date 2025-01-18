import './App.css'
import Hero from './components/Hero.tsx'
import Projects from './components/Projects.tsx'
import Contact from './components/Contact.tsx'

function App() {
  return (
    <div className='h-full w-full bg-blue-950'>
      <Hero />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
