import React from 'react';
import './ReviewOrder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const ReviewOrder = (props) => {
    const { product, handelRemoveToCart } = props;
    const { name, price, shipping, img, quantity } = product;
    return (
        <div className='review-items-container'>
            <img src={img} alt="" />
            <div className="review-details-container">
                <div className='review-details'>
                    <h3>{name}</h3>
                    <p>price: <span className='orange'>${price}</span></p>
                    <p>shipping: <span className='orange'>${shipping}</span></p>
                    <p>quantity: {quantity}</p>
                </div>
                <div className='btn-container'>
                    <button onClick={() => handelRemoveToCart(product)} className='delete-btn'>
                        <FontAwesomeIcon icon={faTrashAlt} className='
                       delete-icon '></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewOrder; <h1>review order</h1>