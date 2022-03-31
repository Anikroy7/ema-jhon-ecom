import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setcart] = useCart(products)
    return (
        <div>
            <h1>this is ordres component: {products.length}</h1>
            <h1>added item: {cart.length}</h1>
        </div>
    );
};

export default Orders;