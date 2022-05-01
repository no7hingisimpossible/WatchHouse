import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar/Navbar';
import Inventories from './Pages/Inventories/Inventories';
import Login from './Pages/Login/Login';
import RequireAuth from './RequireAuth/RequireAuth';
import Manage from './Pages/Manage/Manage';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/inventories/:id' element={<RequireAuth><Inventories/></RequireAuth>}></Route>
        <Route path='/manage' element={<RequireAuth><Manage/></RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
