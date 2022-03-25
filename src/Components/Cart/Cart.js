import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let price = 0;
    let shipping = 0;
    for (const product of cart) {
        console.log(product)
        price = price + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((price * 0.1).toFixed(2));
    const garndTotal = price + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected item: {cart.length} </p>
            <p>Total price: {price}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand total: {garndTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;