import { useState } from 'react'
import Scene from './canvas/Scene'
import Hero from './sections/Hero'
import {About} from './sections/About'
import { Element } from 'react-scroll'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Projects from './sections/Projects'
import BottomNav from './components/BottomNav'

function App() {
  // const [showAbout, setShowAbout] = useState(false)

  // const handleBoxClick = () => {
  //   console.log("clicked");
  //   setShowAbout(true)
  // }

  return (
    <>
      <div className="relative w-screen h-screen">
       
        {/* <Scene onBoxClick={handleBoxClick} /> */}
        <Scene/>
          <Hero />
          <Element name="about">
        <About />
      </Element>
        {/* {showAbout && (
          <div className="absolute inset-0 z-50 flex items-center justify-center text-white bg-black">
            <About />
          </div>
        )} */}
         <Element name="skills">
        <Skills />
      </Element>
          <Element name="education">
        <Education />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      </div>

      <BottomNav />
    </>
  )
}

export default App
