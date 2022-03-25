import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import Cart from '../Cart/Cart';
import Product from '../Product/Product'
import './Shop.css'

const Shop = () => {


    const [products, setProducts] = useState([]);
    const [cartItem, setCartItem] = useState([]);


    useEffect(() => {

        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCartItem(savedCart);
    }, [products])

    const handelAddToCart = (product) => {
        console.log(product)
        const newProduct = [...cartItem, product];
        setCartItem(newProduct);
        addToDb(product.id)

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
            <div className='cart-container'>
                <Cart cart={cartItem}></Cart>
            </div>
        </div>
    );
};

export default Shop;