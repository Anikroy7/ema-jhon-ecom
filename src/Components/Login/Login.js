import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const location = useLocation();

    const from = location.state?.from?.pathName || '/'

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }, [user])


    const handelEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handelPasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handelLogIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div>
            <form onSubmit={handelLogIn} className="form-container">
                <h3 className='form-title'>Login </h3>
                <div className='input-group'>
                    <label htmlFor="email">Email:</label>
                    <input onBlur={handelEmailBlur} type="email" name="email" id="e" required />
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Password:</label>
                    <input onBlur={handelPasswordBlur} type="password" name="password" id="" required />
                </div>
                {
                    error && <p>{error?.message}</p>
                }
                <div className='form-button'>
                    <input type="submit" value="Login" />
                </div>

                <p className='new-user'>New to Ema-jhon? <Link
                    to='/signup'>Create a New Account</Link></p>

            </form>
        </div >
    );
};

export default Login;