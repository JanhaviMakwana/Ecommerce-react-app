import React from 'react';

const ProductDetail = (props) => {
    const product = props.product

    return (
        <div style={{ border: '1px solid gray' }}>
            <p>product</p>
            <p>{product.title}</p>
            <p>Price:{product.price}</p>
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