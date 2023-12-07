/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useLoginMutation } from '../../../store/slices/api-user';
import { setCredentials } from '../../../store/slices/auth';

const Login = ({ openClick, registerClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading }] = useLoginMutation();

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      openClick();
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <form className='form' onSubmit={submitHandler}>
        <h1 className='title'>Sign In</h1>
        <h4 className='subtitle'>
          Sign in to your account using you email address
        </h4>
        <div className='form-group'>
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
        </div>
        <button className='button' type='submit'>
          Sign In
        </button>
      </form>
      <div className='form-section'>
        Need an account?{' '}
        <a className='link' onClick={registerClick()}>
          Register
        </a>
      </div>
    </>
  );
};
Login.propTypes = {
  openClick: PropTypes.func,
  registerClick: PropTypes.func,
};

export default Login;
