import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {


    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])


    return (
        <div className='shop-container'>
            <div>
                <h1>this is our all products: {products.length}</h1>
            </div>
            <div>
                <h1> cart section</h1>
            </div>
        </div>
    );
};

export default Shop;