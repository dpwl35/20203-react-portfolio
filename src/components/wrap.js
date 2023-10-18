import { Routes, Route} from 'react-router-dom';

import '../styles/wrap.css';

import Nav from './nav.js';
function Wrap(props){

  return(    
    <div>
      <Nav />
      <section>
        <Routes>
          <Route path="/"  element={<>main</>}/>
          <Route path="/about" element={ <>about</> } />
          <Route path="/projects" element={ <>projects</> } />
          <Route path="/contact" element={ <>contact</> } />
        </Routes>
      </section>
      
    </div> 
  )
}

export default Wrap;