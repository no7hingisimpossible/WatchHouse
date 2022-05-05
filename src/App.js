import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar/Navbar';
import Inventories from './Pages/Inventories/Inventories';
import RequireAuth from './RequireAuth/RequireAuth';
import Manage from './Pages/Manage/Manage';
import Item from './Pages/Item/Item';
import AddNewItem from './Pages/AddNewItem/AddNewItem';
import MyItems from './Pages/MyItems/MyItems';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import Blogs from './Pages/Blogs/Blogs';
import { Toaster } from 'react-hot-toast';
import NoPageFound from './Pages/Items/NoPageFound/NoPageFound';





function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Toaster></Toaster>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/item' element={<Item/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/inventories/:id' element={<RequireAuth><Inventories/></RequireAuth>}></Route>
        <Route path='/manage' element={<RequireAuth><Manage/></RequireAuth>}></Route>
        <Route path='/addInventory' element={<RequireAuth><AddNewItem/></RequireAuth>}></Route>
        <Route path='/myItems' element={<RequireAuth><MyItems/></RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='*' element={<NoPageFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
