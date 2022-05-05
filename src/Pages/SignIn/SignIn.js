import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';

const SignIn = () => {


    const location = useLocation()
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })
    
    const emailHandler = e => {
        setUserInfo({ ...userInfo, email: e.target.value })
    }
    const passwordHandler = e => {
        setUserInfo({ ...userInfo, password: e.target.value })
    }

    const signin = e => {
        e.preventDefault()

        console.log(userInfo.email, userInfo.password);
        signInWithEmailAndPassword(userInfo.email, userInfo.password)
    }

    const from = location?.state?.from?.pathname || '/'
    if (user) {
        navigate(from, { replace: true })
        toast.success('Welcome', {id: 'login'})
    }
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const resetPassword = () => {
        sendPasswordResetEmail(userInfo.email)
        toast.success('Email sent', {id: "login666"})
    }
    return (
        <div className='login-container'>
            <div className=''>

            </div>
            <div>
                <h3 className='text-center mt-3'>LOGIN</h3>
                <div className='form'>
                    <form onSubmit={signin} >
                        <label htmlFor="email">Email</label>
                        <input onChange={emailHandler} type="email" name="email" id="2" />
                        <label htmlFor="password">Password</label>
                        <input onChange={passwordHandler} type="password" name="password" id="3" />
                        
                        <input className='submit-btn' type="submit" value="LOGIN" />

                        <p className='fw-bold mb-0 mt-2'>New to WatchHouse? <Link to='/signup' className='text-secondary fw-normal'>Please SignUp</Link></p>
                        <p className='fw-bold'>Forgot Password?<button className='btn-link btn my-0' onClick={resetPassword}>Reset Password</button></p>
                        {error?.message.includes('Firebase: Error (auth/wrong-password).') && <p className='text-danger fw-bold'>Password doesnt match</p>}
                        {error?.message.includes('Firebase: Error (auth/user-not-found).') && <p className='text-danger fw-bold text-center'>User not Found</p>}


                    </form>
                    <GoogleSignIn />
                </div>
            </div>
        </div>
    );
};

export default SignIn;