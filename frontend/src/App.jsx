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
    < >
    <div className='bg-[#121212]'>
      <div id='intro'><Intro /></div>
      <div id='About'><About /></div>
      <div id='skills'><Techstack /></div>
      <div id='projects'><Projects /></div>
      <div id='freelance'><Freelance /> </div>
   
    </div>
      
    </>
  )
}

export default App
