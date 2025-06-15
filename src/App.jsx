import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <Navbar/>
      <Home/>
      <Skills/>
      <Education/>
      <Experience/>
      <Projects/>
      <Footer/>
   </>
  )
}

export default App
