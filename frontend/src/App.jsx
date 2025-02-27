import { useState } from 'react'
import './App.css'
import Intro from './components/Intro'
import Techstack from './components/Techstack'
import Projects from './components/Projects'
import About from './components/About'
import Freelance from './components/Freelance'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Intro />
      <About />
      <Techstack />
      <Projects />
      <Freelance />
    </>
  )
}

export default App
