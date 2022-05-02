import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const SignIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const signin = e => {
          e.preventDefault()
          const email = e.target.email.value;
          const password = e.target.pass.value; 
          signInWithEmailAndPassword(email, password)
      }
    return (
        <div>
            <form action="" onSubmit={signin}>
                <input type="email" name='email' placeholder='email' />
                <input type="password" name='pass' placeholder='password' />
                <input type="submit" value="SIGNIN" />
            </form>
        </div>
    );
};

export default SignIn;