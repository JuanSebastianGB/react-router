import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar () {
  return (
    <div>
      <ul>
        <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/Dashboard'>Dashboard</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'active' : 'NotActive'} to='/users'>Users</NavLink></li>
      </ul>
    </div>
  );
}
