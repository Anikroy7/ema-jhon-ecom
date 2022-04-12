import React from 'react';
import './Cart.css'

const Cart = props => {

    const { cart, children } = props;
    let price = 0;
    let shipping = 0;
    let quantity = 0
    for (const product of cart) {
        quantity = quantity + product.quantity;
        price = price + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((price * 0.1).toFixed(2));
    const garndTotal = price + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected item: {quantity} </p>
            <p>Total price: {price}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand total: {garndTotal.toFixed(2)}</h5>
            {props.children}
        </div>
    );
};

export default Cart;