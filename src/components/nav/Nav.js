import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { newCurrentItem } from './state/nav';

const Nav = () => {
  const dispatch = useDispatch();
  const { navItems, currentItem } = useSelector((store) => store.nav);

  return (
    <nav className='nav'>
      <ul className='nav-list'>
        {navItems.map((item) => {
          return (
            <li
              className={currentItem === item ? 'nav-item current' : 'nav-item'}
            >
              <Link
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                onClick={() => dispatch(newCurrentItem(item))}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
