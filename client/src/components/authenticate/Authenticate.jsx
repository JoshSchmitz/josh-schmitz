import { useSelector } from 'react-redux';
import { MdOutlineLogin } from 'react-icons/md';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// import pages
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';

// import components
import ProfileBadge from './components/ProfileBadge';

const Authenticate = () => {
  const { currentItem } = useSelector((state) => state.nav);
  const { userInfo } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const [register, setRegister] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleRegister = () => {
    setRegister(!register);
  };

  return (
    <>
      <Link
        to={
          currentItem === 'Home'
            ? '/'
            : `/${currentItem.toString().toLowerCase()}`
        }
        onClick={handleOpen}
      >
        <div className='auth'>
          {userInfo ? <ProfileBadge /> : <MdOutlineLogin />}
        </div>
      </Link>
      {open ? (
        <div className='auth-container'>
          {register ? (
            <Register loginClick={() => handleRegister()} />
          ) : userInfo ? (
            <Profile />
          ) : (
            <Login
              openClick={() => handleOpen()}
              registerClick={() => handleRegister()}
            />
          )}
        </div>
      ) : null}
    </>
  );
};
export default Authenticate;
