import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar/Navbar';
import Inventories from './Pages/Inventories/Inventories';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/inventories/:id' element={<Inventories/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
