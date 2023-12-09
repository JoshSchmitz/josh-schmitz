/* eslint-disable no-unused-vars */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../../store/slices/auth';
import { useRegisterMutation } from '../../../store/slices/api-user';
import { toast } from 'react-toastify';

const Register = ({ openClick, loginClick }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [register, { isLoading }] = useRegisterMutation();

  const dispatch = useDispatch();

  const registerHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        loginClick();
        openClick();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <>
      <form className='form' onSubmit={registerHandler}>
        <div className='title-bar'>
          <h1 className='title'>Sign up</h1>
        </div>
        <h4 className='subtitle'>Sign up for access to cool stuff</h4>
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
  openClick: PropTypes.func,
  loginClick: PropTypes.func,
};
export default Register;
