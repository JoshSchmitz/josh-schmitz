import { useState } from 'react';
import { MdOutlineLogout } from 'react-icons/md';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <>
      <form className='form'>
        <div className='title-bar'>
          <h1 className='title'>Profile</h1>
          <div className='logout'>
            <MdOutlineLogout className='logout-icon' />
          </div>
        </div>
        <h4 className='subtitle'>Update your profile information</h4>
        <div className='form-group'>
          <input
            className='input'
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='input'
            type='email'
            placeholder='Email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='input'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className='input'
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className='button' type='submit'>
          Update
        </button>
      </form>
    </>
  );
};
export default Profile;
