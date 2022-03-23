import React from 'react';
import logo from '../../logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="#Order">Order</a>
                <a href="#Review">Order Review</a>
                <a href="#manage">Manage Inventory</a>
            </div>

        </nav>
    );
};

export default Header;