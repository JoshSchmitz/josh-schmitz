import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h3>Sign In</h3>
      <div className='form'>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
        </div>
      </div>

      <Link to='/auth/register'>Register</Link>
    </div>
  );
};
export default Login;
