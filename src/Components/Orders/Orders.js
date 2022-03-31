import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart'
import ReviewOrder from '../ReviewOrder/ReviewOrder';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setcart] = useCart(products)
    return (
        <div>
            <div className="shop-container">
                <div className="">

                    {
                        cart.map(product => <ReviewOrder product={product}></ReviewOrder>)
                    }

                </div>

                <div className='cart-container'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;