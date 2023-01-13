import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../scss/main.scss';
import Header from './site/Header';
import Footer from './site/Footer';
import Home from './site/Home';
import Resume from './site/Resume';
import Contact from './site/Contact';

const App = () => {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='/resume' element={<Resume></Resume>}></Route>
        <Route exact path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
};

export default App;
