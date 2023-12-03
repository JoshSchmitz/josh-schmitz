import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';

const AuthContainer = () => {
  return (
    <div className='auth-container'>
      <h3>Auth Container</h3>
      <Routes>
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />
      </Routes>
    </div>
  );
};
export default AuthContainer;
