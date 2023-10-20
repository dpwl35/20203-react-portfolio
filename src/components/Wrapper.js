import {Routes, Route} from 'react-router-dom';

import '../styles/Wrap.css';

/*components*/
import Nav from './Nav.js';
import Canvas from './Canvas.js'
import Projects from './Projects.js'

function Wrapper(){
  return(    
    <div>
      <Nav />
      <section>
        <Routes>
          <Route path="/"  element={ <Canvas /> }/>
          <Route path="/about" element={ <>about</> } />
          <Route path="/projects" element={ <Projects />  } />
          <Route path="/contact" element={ <>contact</> } />
        </Routes>
      </section>
    </div> 
  )
}

export default Wrapper;