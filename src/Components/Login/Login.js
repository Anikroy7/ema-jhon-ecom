import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div>
            <form className="form-container">
                <h3 className='form-title'>Login </h3>
                <div className='input-group'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="e" required />
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="" required />
                </div>

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