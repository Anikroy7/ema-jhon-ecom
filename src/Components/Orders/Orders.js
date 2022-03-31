import React from 'react';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <h1>this is ordres component: {products.length}</h1>
        </div>
    );
};

export default Orders;