import React from 'react';
import { withState } from '../../ecom-context';
import ProductService from '../../services/productService';
import ProductDetail from './ProductDetail/ProductDetail';
import * as actionTypes from '../../store/actionTypes';
import './Cart.css';

const Cart = (props) => {

    const quantityChangeHandler = (id, type) => {

        let user = { ...props.state.user };

        if (type === "Increment") {
            let product = user.cart.find(x => x.productId === id)
            product.quantity++;

        } else if (type === "Decrement") {
            let product = user.cart.find(x => x.productId === id)
            product.quantity--;

        } else { }
        ProductService.handleCart(user, user.id)
            .then(res => { props.dispatch({ type: actionTypes.ADD_TO_CART, user: res }) })
            .catch(err => { console.log(err); })
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