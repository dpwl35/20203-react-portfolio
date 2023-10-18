//import { useEffect } from 'react';
import './App.css';
import './styles/theme.css';
import { Routes, Route, Link, useNavigate} from 'react-router-dom';

function App() {
  // useEffect(() => {
  //   if (localStorage.getItem("theme")) {
  //     document.documentElement.setAttribute(
  //       "data-theme", localStorage.getItem("theme")
  //     );
  //   }
  // }, []);

  // const themeItems = [
  //   {
  //     name:"GitHub Dark",
  //     theme: "githubDark",
  //   },
  //   {
  //     name:"Dracula",
  //     theme: "dracula",
  //   },
  // ]

  // const setTheme = (theme) => {
  //   document.documentElement.setAttribute('data-theme', theme);
  //   localStorage.setItem('theme', theme);
  // };
  let navigate = useNavigate();

  return (
    <div className="App">
        
      <header>
        <Link onClick={()=>{ navigate('/') }}>Portfolio</Link>
        <Link onClick={()=>{ navigate('/about') }}>about</Link>

      </header>

      <Routes>
        <Route path="/"  element={<>메인페이지</>}/>
        <Route path="/about" element={<>about</>}/>
        <Route path="/projects" element={<>projects</>}/>
        <Route path="/contact" element={<>contact</>}/>
      </Routes>

      {/* <div>
        {
          themeItems.map((item, idx) => {
            return (
              <div key={idx}>
          
                  <input type="radio" id={item.theme} name="theme" value={item.theme} defaultChecked={localStorage.getItem("theme") === item.theme} onClick={() => {
                    setTheme(item.theme);
                  }}/>
                  <label htmlFor={item.theme}> set theme </label>
            
              </div>
            )
          })
        }
      </div> */}

    </div>
  );
}

export default App;
