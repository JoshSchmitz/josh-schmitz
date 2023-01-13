import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>Header works!</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/resume'>Resume</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
