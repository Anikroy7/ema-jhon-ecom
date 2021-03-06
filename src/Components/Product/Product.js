import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { name, price, seller, ratings, img } = props.products;
    const { handelAddToCart } = props;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price <small>${price}</small></p>
                <p className='product-details'>

                    <small>Manufacturer: {seller}</small><br /><br />
                    <small>Rating: {ratings} star</small>

                </p>
            </div>
            <button onClick={() => handelAddToCart(props.products)} className='cart-btn'>
                <h4 className='cart-text'>Add to cart</h4>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

            </button>
        </div>
    );
};

export default Product;