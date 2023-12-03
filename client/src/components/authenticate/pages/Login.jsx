import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h3>Auth Login</h3>
      <Link to='/auth/register'>Register</Link>
    </div>
  );
};
export default Login;
