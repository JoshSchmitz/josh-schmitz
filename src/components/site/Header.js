import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <h1>Josh Schmitz</h1>
        </div>
        <div className='menu'>
          <ul className='menu-nav'>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
