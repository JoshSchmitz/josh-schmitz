import { useState } from 'react';
import PropTypes from 'prop-types';

const Register = ({ loginClick }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <>
      <form className='form'>
        <div className='title-bar'>
          <h1 className='title'>Register</h1>
        </div>
        <h4 className='subtitle'>Register an account</h4>
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
          Register
        </button>
      </form>
      <div className='form-section'>
        Already have an account?{' '}
        <a className='link' onClick={loginClick}>
          Log in
        </a>
      </div>
    </>
  );
};
Register.propTypes = {
  loginClick: PropTypes.func,
};
export default Register;
