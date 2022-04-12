import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setComfirmPassword] = useState('');
    const [error, setError] = useState('');


    const handelEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handelPasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handelConfirmPasswordBlur = event => {
        setComfirmPassword(event.target.value)
    }

    const handelCreateUser = event => {
        event.preventDefault()

        if (password !== confirmPassword) {
            setError(`password did't match `)
        }

    }

    return (
        <div>
            <form onSubmit={handelCreateUser} className="form-container">
                <h3 className='form-title'>Sign Up </h3>
                <div className='input-group'>
                    <label htmlFor="name">Email:</label>
                    <input onBlur={handelEmailBlur} type="email" name="email" id="" required />
                </div>
                <div onBlur={handelPasswordBlur} className='input-group'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="p" required />
                </div>
                <div onBlur={handelConfirmPasswordBlur} className='input-group'>
                    <label htmlFor="password">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="cp" required />
                </div>
                <span style={{ color: 'red' }}>{error}</span>
                <div className='form-button'>
                    <input type="submit" value="Sign up" />
                </div>

                <p className='new-user'>Already have an accoun? <Link
                    to='/login'>Login</Link></p>

            </form>
        </div>
    );
};

export default Signup;