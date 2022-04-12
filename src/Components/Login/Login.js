import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div>
            <form className="form-container">
                <h3 className='form-title'>Login </h3>
                <div className='input-group'>
                    <label htmlFor="name">Name:</label>
                    <input type="email" name="email" id="" />
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="" />
                </div>

                <div className='form-button'>
                    <input type="button" value="Login" />
                </div>

                <p className='new-user'>New to Ema-jhon? <Link
                    to='/signup'>Create New Account</Link></p>

            </form>
        </div >
    );
};

export default Login;