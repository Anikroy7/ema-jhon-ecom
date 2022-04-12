import { isUWP } from '@firebase/util';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')
    const [user] = useAuthState(auth);
    const handelNameBlur = event => {
        setName(event.target.value)
    }

    const handelEmailBlur = event => {
        setEmail(event.email.value)
    }

    const handelAddressBlur = event => {
        setAddress(event.target.value)
    }

    const handelPhoneBlur = event => {
        setPhone(event.target.value)
    }

    const handelCreateShipping = event => {
        event.preventDefault()
        const shipping = { name, user, email, address }
    }

    return (

        <div>
            <form onClick={handelCreateShipping} className="form-container">
                <h3 className='form-title'>Shipping Infomation </h3>
                <div className='input-group'>
                    <label htmlFor="name">Your name</label>
                    <input onBlur={handelNameBlur} type="text" name="email" readOnly id="" required />
                </div>
                <div className='input-group'>
                    <label htmlFor="email">Email:</label>
                    <input value={user?.email} type="email" name="email" id="" required />
                </div>
                <div onBlur={handelAddressBlur} className='input-group'>
                    <label htmlFor="address">address:</label>
                    <input type="address" name="address" id="p" required />
                </div>
                <div onBlur={handelPhoneBlur} className='input-group'>
                    <label htmlFor="phone">Phone:</label>
                    <input type="phone" name="phone" id="cp" required />
                </div>
                <span style={{ color: 'red' }}>{error}</span>
                <div className='form-button'>
                    <input type="submit" value="Add shipping" />
                </div>



            </form>

        </div>
    );
};

export default Shipment;