import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Authenticate from '../authenticate/Authenticate';
import { newCurrentItem } from '../../store/slices/nav';

const Nav = () => {
  const dispatch = useDispatch();
  const { navItems, currentItem } = useSelector((state) => state.nav);

  return (
    <nav className='nav'>
      <ul className='nav-list'>
        {navItems.map((item) => {
          const name = item.name;
          return (
            <li
              key={item._id}
              className={currentItem === name ? 'nav-item current' : 'nav-item'}
            >
              <Link
                to={name === 'Home' ? '/' : `/${name.toString().toLowerCase()}`}
                onClick={() => dispatch(newCurrentItem(name))}
              >
                {name}
              </Link>
            </li>
          );
        })}
        <li className='nav-item-noeffect'>
          <Authenticate></Authenticate>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
