import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// import components
import Authenticate from '../authenticate/Authenticate';
import MenuButton from './MenuButton';

// import redux state
import { newCurrentItem } from '../../store/slices/nav';

const Nav = () => {
  const dispatch = useDispatch();
  const { navItems, currentItem } = useSelector((state) => state.nav);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav className='nav'>
      <div className='nav-list-item-noeffect menu'>
        <Link
          to={
            currentItem === 'Home'
              ? '/'
              : `/${currentItem.toString().toLowerCase()}`
          }
          onClick={handleOpen}
        >
          <MenuButton type='menu' />
        </Link>
      </div>
      <ul className={open ? 'nav-list' : 'nav-list closed'}>
        {navItems.map((item) => {
          const name = item.name;
          return (
            <li
              key={item._id}
              className={
                currentItem === name ? 'nav-list-item current' : 'nav-list-item'
              }
            >
              <Link
                to={name === 'Home' ? '/' : `/${name.toString().toLowerCase()}`}
                onClick={() => {
                  dispatch(newCurrentItem(name));
                  open && handleOpen();
                }}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className='nav-list-item-noeffect'>
        <Authenticate />
      </div>
    </nav>
  );
};
export default Nav;
