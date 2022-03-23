import React, { useEffect, useState } from 'react';
import Product from '../Product/Product'
import './Shop.css'

const Shop = () => {


    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    const handelAddToCart = (product) => {
        console.log(product)
    }


    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        products={product}
                        key={product.id}
                        handelAddToCart={handelAddToCart}

                    ></Product>)
                }

            </div>
            <div>
                <h1> cart section</h1>
            </div>
        </div>
    );
};

export default Shop;