import { useSelector } from 'react-redux';
import { MdOutlineLogin } from 'react-icons/md';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// import components
import AuthContainer from './AuthContainer';

const Authenticate = () => {
  const userInfo = useSelector((state) => state.auth);
  const [click, setClick] = useState(false);

  const getInitials = (name) => {
    let names = name.split(' ');
    let initials = names[0].substring(0, 1).toUpperCase();
    if (name.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  };

  const handleDropdown = () => {
    setClick(!click);
  };

  return (
    <>
      <Link to='/auth/login'>
        <div className='auth'>
          {userInfo.name ? (
            getInitials(userInfo.name)
          ) : (
            <MdOutlineLogin onClick={handleDropdown} />
          )}
        </div>
      </Link>
      {click ? <AuthContainer /> : null}
    </>
  );
};
export default Authenticate;
