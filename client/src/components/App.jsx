import { Outlet } from 'react-router-dom';
import Header from './header/Header';

const App = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};
export default App;
