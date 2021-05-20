import React from 'react';
import './ProductDetail.css';

const ProductDetail = (props) => {
    const product = props.product

    return (
        <div className="product-cart">
            <p>{product.title}</p>
            <p className="price">Price<strong>:{product.price} &#36;</strong></p>
            <button
                className="btn btn-secondary btn-sm"
                onClick={() => props.quantityHandler(product.productId, "Decrement")}
            >
                <p className="text-white h5">-</p>
            </button>
            {product.quantity}
            <button className="btn btn-secondary btn-sm"
                onClick={() => props.quantityHandler(product.productId, "Increment")}
            >
                <p className="text-white h5">+</p>
            </button>
        </div>
    );
};

export default ProductDetail;