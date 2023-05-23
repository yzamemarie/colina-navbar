import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Routes, Route} from 'react-router-dom';

import NavbarComp from './components/navbarComp';
import Homepage from './pages/homepage';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <>
      <NavbarComp/>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
      </Routes>
    </>
  );
}

export default App;
