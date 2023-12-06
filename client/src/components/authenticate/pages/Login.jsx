import { useState, useDispatch } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='form' onSubmit={submitHandler}>
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
      </div>
      <div className='form-section'>
        Need an account?{' '}
        <Link className='link' to='/register'>
          Register
        </Link>
      </div>
    </>
  );
};
export default Login;
