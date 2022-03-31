import React from 'react';
import './ReviewOrder.css'
const ReviewOrder = (props) => {
    const { name, price, shipping, img, quantity } = props.product
    return (
        <div className='review-items-container'>
            <img src={img} alt="" />
            <div className="review-details-container">
                <div className='review-details'>
                    <h3>{name}</h3>
                    <p>price: ${price}</p>
                    <p>shipping: ${shipping}</p>
                    <p>quantity: j{quantity}</p>
                </div>
                <div>
                    <button>delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewOrder; <h1>review order</h1>