import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import Cart from '../Cart/Cart';
import Product from '../Product/Product'
import './Shop.css'

const Shop = () => {


    const [products, setProducts] = useState([]);
    const [cartItem, setCartItem] = useCart();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [page, size])

    useEffect(() => {

        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10)
                setPageCount(pages)
            })
    }, [])

    // useEffect(() => {
    //     const storedCart = getStoredCart();
    //     const savedCart = [];
    //     for (const id in storedCart) {
    //         const addedProduct = products.find(product => product._id === id)
    //         if (addedProduct) {
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //             savedCart.push(addedProduct);
    //         }
    //     }
    //     setCartItem(savedCart);
    // }, [products])

    const handelAddToCart = (product) => {
        console.log(product)
        let newCart = [];

        const exists = cartItem.find(pd => pd._id === cartItem._id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cartItem, product]
        }
        else {

            const rest = cartItem.filter(pd => pd._id !== cartItem._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCartItem(newCart);
        addToDb(product._id)

    }


    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        products={product}
                        key={product._id}
                        handelAddToCart={handelAddToCart}

                    ></Product>)
                }

                <div className='pagenation'>
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <button
                                onClick={() => setPage(number)}
                                className={
                                    number === page ? 'selected' : ''
                                }
                            >{number + 1}</button>)
                    }

                    <select onChange={(e) => setSize(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>
            <div className='cart-container'>
                <Cart cart={cartItem}>
                    <Link to={'/orders'}>
                        <button>Review orders</button>
                    </Link>
                </Cart>
            </div>
        </div >
    );
};

export default Shop;