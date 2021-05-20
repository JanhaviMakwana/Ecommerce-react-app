import React from 'react';
import { withState } from '../../ecom-context';
import ProductService from '../../services/productService';
import ProductDetail from './ProductDetail/ProductDetail';
import './Cart.css';

const Cart = (props) => {

    const quantityChangeHandler = (id, type) => {
        alert(id)
    }

    const cart = props.state.user.cart;
    return (
        <div className="container">
            {cart.map((product) => {
                return <ProductDetail product={product} quantityHandler={(id, type) => quantityChangeHandler(id, type)} />
            })}
        </div>
    )
};

export default withState(Cart);