import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg'
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const signOutHandeler = () => {
        signOut(auth)
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user ? <button onClick={signOutHandeler}>Log out</button>
                        : <Link to={"/login"}>Log in</Link>
                }
                <Link to={"/signup"}>Sign Up</Link>
            </div>

        </nav>
    );
};

export default Header;