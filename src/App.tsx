import { Outlet } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Navigation from './components/Header/Navigation';

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
