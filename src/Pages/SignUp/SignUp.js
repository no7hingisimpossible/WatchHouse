import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import './SignUp.css'

const SignUp = () => {

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
        confirmPassError: "",
    })

    const [
        createUserWithEmailAndPassword,
        loading,
        user
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate()

    const nameHandler = e => {
        setUserInfo({ ...userInfo, name: e.target.value })

    }
    const emailHandler = e => {
        setUserInfo({ ...userInfo, email: e.target.value })
    }
    const passwordHandler = e => {
        setUserInfo({ ...userInfo, password: e.target.value })
    }
    const confirmPassword = e => {
        if (userInfo.password === e.target.value) {
            setUserInfo({ ...userInfo, confirmPassword: e.target.value })
            setErrors({ ...errors, confirmPassError: "" })
        } else {
            setErrors({ ...errors, confirmPassError: 'Password did not match' })
            setUserInfo({ ...userInfo, confirmPassword: "" })
        }
    }



    const signup = e => {
        e.preventDefault()

        console.log(userInfo.email, userInfo.password);
        createUserWithEmailAndPassword(userInfo.email, userInfo.password)

    }


    let location = useLocation();


    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
        toast.success('SignUp successfull', { id: "toast-signup" })
    }
    if (loading) {
        return <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }


    return (
        <div className='signup-container'>
            <div></div>
            <div>
                <h2 className='text-center my-3'>Please Register</h2>


                <div className='form'>
                    <form onSubmit={signup}>
                        <label htmlFor="name">Name</label>
                        <input onChange={nameHandler} type="text" name="name" id="1" />

                        <label htmlFor="email">Email</label>
                        <input onChange={emailHandler} type="email" name="email" required id="2" />

                        {errors?.emailError && <p className='text-danger fw-bold ms-2'>{errors.emailError}</p>}
                        <label htmlFor="password">Password</label>
                        <input onChange={passwordHandler} type="password" name="password" required id="3" />

                        {errors?.passwordError && <p className='text-danger fw-bold ms-2'>{errors.passwordError}</p>}
                        <label htmlFor="password">Confirm Password</label>
                        <input onChange={confirmPassword} type="password" name="password" required id="4" />

                        {errors?.confirmPassError && <p className='text-danger fw-bold ms-2'>{errors.confirmPassError}</p>}
                        <input className='submit-btn' type="submit" value="SIGNUP" />


                        <p className=''>Already have an account? <span style={{ cursor: 'pointer' }} onClick={() => navigate('/login')} className='text-danger'>Please Login</span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;