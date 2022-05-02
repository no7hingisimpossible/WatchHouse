import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';



const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    

    let navigate = useNavigate();
    let location = useLocation();


    let from = location.state?.from?.pathname || "/";

    if(user){
        navigate(from, { replace: true });
    }
    
    const siginHandler = () => {
        signInWithGoogle()
    }
    return (
        <div className='text-center mt-3'>
            <button  onClick={siginHandler} className='btn btn-danger'>SIGNIN</button>
        </div>
    );
};

export default Login;