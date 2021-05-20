import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Product from './Product/Product';
import * as filterOptions from './FilterOptions';
import './ProductList.css';
import ProductService from '../../services/productService';

const ProductList = (props) => {
    const [products, setProducts] = useState([]);
    const query = props.location.search;

    const fetchProducts = async () => {
        const products = await ProductService.getProductsByCategory(query)
        console.log(products);
        return products.data;
    }
    useEffect(() => {
        ProductService.getProductsByCategory(query)
            .then(res => { setProducts(res.data) })
            .catch(err => { console.log(err); })
    }, [query])

    const filterChangeHadler = (type) => {
        switch (type) {
            case filterOptions.ALL:
                fetchProducts()
                    .then(res => { setProducts(res) })
                    .catch(err => { console.log(err); });

                break;
            case filterOptions.UNDER_10:
                fetchProducts().then(res => {
                    setProducts(res.filter(x => (x.price > 0 && x.price <= 10))
                        .sort((x, y) => (x.price - y.price)))
                })
                break;
            case filterOptions.UNDER_10_TO_50:
                fetchProducts().then(res => {
                    setProducts(res.filter(x => (x.price > 10 && x.price <= 50))
                        .sort((x, y) => (x.price - y.price)))
                })
                break;
            case filterOptions.ABOVE_50:
                fetchProducts().then(res => {
                    setProducts(res.filter(x => x.price > 50)
                        .sort((x, y) => (x.price - y.price)))
                })

                break;
            default:
                break;
        }
    };

    return (
        <div className="d-flex flex-row">
            <div style={{ width: 'max-content', height: '100%', margin: '0 10px' }} >
                <p>Filter</p>
                <div className="d-flex flex-column btn-group btn-group-toggle bg-highlight filter" data-toggle="buttons">
                    <label class="btn btn-outline-secondary btn-block active" onClick={() => filterChangeHadler(filterOptions.ALL)}>
                        <input type="radio" autocomplete="off" checked /> All
                    </label>
                    <label class="btn btn-outline-secondary btn-block" onClick={() => filterChangeHadler(filterOptions.UNDER_10)}>
                        <input type="radio" autocomplete="off" /> Under 10$
                    </label>
                    <label class="btn btn-outline-secondary btn-block" onClick={() => filterChangeHadler(filterOptions.UNDER_10_TO_50)}>
                        <input type="radio" autocomplete="off" /> 10-50$
                    </label>
                    <label class="btn btn-outline-secondary btn-block" onClick={() => filterChangeHadler(filterOptions.ABOVE_50)}>
                        <input type="radio" autocomplete="off" /> Above 50$
                    </label>
                </div>
            </div>
            <div className="d-flex flex-wrap align-content-sm-start products-type-1" style={{ width: 'fit-content' }}>
                {products.map(product => {
                    return <Product product={product} />
                })}
            </div>
        </div>
    );
};

export default withRouter(ProductList);