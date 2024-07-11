import './Home.css';
import {NavLink, Outlet} from 'react-router-dom';

function Home()
{
  return(
    <div>
      <div className='main'>
        <h1>Component Life Cycle</h1>
        <NavLink className='link' to='/Mounting'>Mounting</NavLink>
        <NavLink className='link' to='/Updating'>Updating</NavLink>
        <NavLink className='link' to='/Unmounting'>Unmounting</NavLink>
      </div>
      <div className='outlet'>
        <Outlet />
      </div>
    </div>
      
    
  )
}

export default Home;