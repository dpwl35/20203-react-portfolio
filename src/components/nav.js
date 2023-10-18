import { useNavigate,} from 'react-router-dom';
function Nav(props){
  const navigate = useNavigate();
  const menuItem = [
    {
      name: 'About',
      path: '/About',
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
  return(    
    <div className='nav'>
      <div className='nav-left'>
       <div className='logo' onClick={()=>{ navigate('/') }}>Portfolio</div>
        <ul className='menu'>
          {
            menuItem.map(({name, path})=>{
            return (
              <li onClick={() => {navigate(path)}} key={path}>
                <div>{name}</div>
              </li>
            )
            })
          }
        </ul>
      </div>
      <div>github | blog</div>
    </div> 
  )
}

export default Nav;