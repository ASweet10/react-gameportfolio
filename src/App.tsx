import './App.css'
import Projects from './components/Projects.tsx'
import About from './components/About.tsx'

function App() {
  return (
    <div className='h-full w-full bg-gray-900'>
      <About />
      <Projects />
    </div>
  )
}

export default App
