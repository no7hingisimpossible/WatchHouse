
import { getAdditionalUserInfo, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import './Navbar.css'



const Navbar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const signIn = () => {
        navigate('/signin')
    }
    
      console.log(user);
    return (
        <div className='sticky-top'>
            <nav className="navbar navbar-expand-lg  navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">WatchHouse</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blogs">BLOGS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">SIGNUP</Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                        {
                                user && 
                                <>
                                    <Link to='/myItems'>My Items</Link>
                                    <Link to='/manage'>Manage</Link>
                                    <Link to='/addInventory'>Add Item</Link>
                                </>
                            }
                        {
                                user ? <span>{user?.displayName} <button className='logout-btn' onClick={()=>signOut(auth)}>SIGNOUT</button></span> : <button onClick={signIn} className='logout-btn'>SIGIN</button>
                            }
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;