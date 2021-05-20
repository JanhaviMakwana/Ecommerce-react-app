import React from 'react';
import { withState } from '../../../ecom-context';
import { withRouter } from 'react-router-dom';
import ProductService from '../../../services/productService';
import * as actionTypes from '../../../store/actionTypes';
import './Product.css';
const Product = (props) => {
    const cart = props.state.user ? props.state.user.cart : [];
    const data = cart.filter(x => x.productId === props.product.id);
    const imgUrl = require(`../../../ProductsBank/images/${props.product.image}`).default;

    const addToCartHandler = (id, type) => {
        if (props.state.user) {
            let user = { ...props.state.user };
            const product = props.product;

            if (!type) {
                const data = {
                    productId: id,
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    category: product.category,
                    quantity: 1
                }
                user.cart.push(data)
                ProductService.addToCart(user, user.id)
                    .then(res => { props.dispatch({ type: actionTypes.ADD_TO_CART, user: res }) })
                    .catch(err => { console.log(err); })
            } else {
                user.cart.pop(x => x.productId === id)
                ProductService.addToCart(user, user.id)
                    .then(res => { props.dispatch({ type: actionTypes.ADD_TO_CART, user: res }) })
                    .catch(err => { console.log(err); })
            }
        } else {
            props.history.push('/auth');
        }
    }

    return (
        <div className="product-box" >
            <div className="img-box">
                <img src={imgUrl} alt="" />
            </div>
            <div className="detail">
                <p className="img-title">{props.product.title}</p>
                <p className="img-price">{props.product.price} &#36;</p>
            </div>
            <button className="btn btn-primary cart" onClick={() => addToCartHandler(props.product.id, data.length)}>
                <p className="text-white h6">{data.length === 0 ? "ADD TO CART" : "REMOVE FROM CART"}</p>
            </button>
            {/*  <div className="cart" >

            </div> */}
        </div>
    );
};

export default withRouter(withState(Product));