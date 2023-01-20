import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='nav-list'>
        <li className='nav-item current'>
          <Link to='/'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link to='/resume'>Resume</Link>
        </li>
        <li className='nav-item'>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
