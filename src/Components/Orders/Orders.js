import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart'
import ReviewOrder from '../ReviewOrder/ReviewOrder';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setcart] = useCart(products);

    const navigate = useNavigate();
    console.log(navigate)
    const handelRemoveToCart = product => {

        const rest = cart.filter(pd => product.id !== pd.id);
        setcart(rest)
        removeFromDb(product.id);
    }

    return (
        <div>
            <div className="shop-container">
                <div className="review-all-items-container">

                    {
                        cart.map(product => <ReviewOrder
                            product={product}
                            handelRemoveToCart={handelRemoveToCart}
                            key={product.id}
                        ></ReviewOrder>)
                    }

                </div>

                <div className='cart-container'>
                    <Cart cart={cart}>
                        <button onClick={() => navigate('/shipment')}>procced cheakout</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;