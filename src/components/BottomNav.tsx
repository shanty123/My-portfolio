import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

export default function BottomNav() {
  return (
<div className="fixed">

      {/* Home Tab */}
      <motion.div
        className="cursor-pointer"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
          <Link to="about" smooth={true} duration={500} className="nav-link" activeClass="active">
        About
        </Link>
      </motion.div>
      <motion.div
        className="cursor-pointer"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
         <Link to="skills" smooth={true} duration={500} className="nav-link" activeClass="active">
        Skills
        </Link>
      </motion.div>


      <motion.div
        className="cursor-pointer"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
       <Link to="education" smooth={true} duration={500} className="nav-link" activeClass="active">
         Education
        </Link>
      </motion.div>
      <motion.div
        className="cursor-pointer"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Link to="experience" smooth={true} duration={500} className="nav-link" activeClass="active">
       Experience
        </Link>
      </motion.div>
      <motion.div
        className="cursor-pointer"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Link to="projects" smooth={true} duration={500} className="nav-link" activeClass="active">
       Projects
        </Link>
      </motion.div>

     
      <motion.div
        className="cursor-pointer"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
         <Link to="contact" smooth={true} duration={500} className="nav-link" activeClass="active">
     Contact
        </Link>
      </motion.div>
      {/* <motion.div
        className="cursor-pointer"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="nav-link">
        Publications
        </a>
      </motion.div> */}
    </div>
  )
}
