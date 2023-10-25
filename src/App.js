/*css*/ 
import './App.css';
import './styles/theme.css';

/*components*/
import Nav from './components/Nav.js';
import Wrapper from './components/Wrapper.js'
import { useEffect } from 'react';



function App() {
  useEffect(()=> {

  })
  return (
    <div id='App' className="App" data-value="001">
      <Nav />
      <Wrapper />
    </div>
  );
}


export default App;
