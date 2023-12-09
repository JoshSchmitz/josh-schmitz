import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// import components
import Header from './header/Header';

// import css
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <Outlet />
    </>
  );
};
export default App;
