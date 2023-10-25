import { useNavigate, useLocation} from 'react-router-dom';

function Nav(){
  const navigate = useNavigate();
  const menuItem = [
    {
      name: 'Portfolio',
      path: '/',
    },
    {
      name: 'about',
      path: '/about',
    },
    {
      name: 'projects',
      path: '/projects',
    },
    {
      name: 'contact',
      path: '/contact',
    },
  ]

  const setTheme = (name) => {
    document.documentElement.setAttribute('data-theme', name);
  };

  const dataTheme = document.documentElement  
  const location = useLocation();
  const pathName = location.pathname.substr(1);

  //console.log(dataTheme)
  //console.log(pathName)

  dataTheme.dataset.theme = pathName

  return(    
    <div className='nav'>
      <div className='nav-left'>
        <ul className='menu'>
          {
            menuItem.map(({name, path})=>{
            return (
              <li value={name}
                  onClick={() => { 
                  navigate(path); 
                  setTheme(name); }} key={path}>
                <div>{name}</div>
              </li>
            )
            })
          }
        </ul>
      </div>
      <div className='nav-right'>
        <a href='https://github.com/dpwl35' target='_blank' rel="noopener noreferrer" title="새창으로 열기 깃허브">Github</a>
        <a href='https://ji35.tistory.com/' target='_blank' rel="noopener noreferrer" title="새창으로 열기 블로그">Blog</a>
      </div>
    </div> 
  )
}

export default Nav;