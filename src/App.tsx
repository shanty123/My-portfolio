
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
  
  return (
    <>
      <div className="relative w-screen h-screen">
       
       
        <Scene/>
          <Hero />
          <Element name="about">
        <About />
      </Element>
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
