import {Routes, Route} from 'react-router-dom';

import '../styles/Wrapper.css';

/*components*/
//import Nav from './Nav.js';
import Canvas from './Canvas.js'
import About from './About.js'
import Projects from './Projects.js'
import Contact from './Contact.js';

function Wrapper(){
  return(    

      
      <section>
        <Routes>
          <Route path="/"  element={ <Canvas /> }/>
          <Route path="/about" element={ <About /> } />
          <Route path="/projects" element={ <Projects />  } />
          <Route path="/contact" element={ <Contact />  } />
        </Routes>
      </section>

  )
}

export default Wrapper;