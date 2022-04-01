import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart'
import ReviewOrder from '../ReviewOrder/ReviewOrder';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setcart] = useCart(products);


    const handelRemoveToCart = product => {

        const rest = cart.filter(pd => product.id !== pd.id);
        setcart(rest)
    }

    return (
        <div>
            <div className="shop-container">
                <div className="review-all-items-container">

                    {
                        cart.map(product => <ReviewOrder
                            product={product}
                            handelRemoveToCart={handelRemoveToCart}
                        ></ReviewOrder>)
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