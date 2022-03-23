import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, price, seller, ratings, img } = props.products
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
            <button className='cart-btn'>
                <h4>Add to cart</h4>
            </button>
        </div>
    );
};

export default Product;