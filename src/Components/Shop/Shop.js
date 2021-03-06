import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import Cart from '../Cart/Cart';
import Product from '../Product/Product'
import './Shop.css'

const Shop = () => {


    const [products, setProducts] = useProducts();
    const [cartItem, setCartItem] = useState([]);



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
        let newCart = [];

        const exists = cartItem.find(pd => pd.id === cartItem.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cartItem, product]
        }
        else {

            const rest = cartItem.filter(pd => pd.id !== cartItem.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCartItem(newCart);
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
                <Cart cart={cartItem}>
                    <Link to={'/orders'}>
                        <button>Review orders</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;