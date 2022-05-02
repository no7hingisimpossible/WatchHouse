import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const  signup = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div>
            <form action="" onSubmit={signup}>
                <input type="email" name='email' placeholder='email' />
                <input type="password" name='password' placeholder='password' />
                <input type="submit" value="SIGNUP" />
                <br />
                <Link to='/signin'>SignIn</Link>
                {error?.message}
            </form>
        </div>
    );
};

export default SignUp;