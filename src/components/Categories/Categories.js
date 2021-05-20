import React from 'react';
import { withRouter } from 'react-router-dom';
import './Categories.css';

const Categories = (props) => {

    const categorySelectHandler = (category) => {
        props.history.push(`/products?q=${category}`);
    };

    return (
        <div className="container-xxl" style={{ backgroundColor: 'white', maxWidth: '100vw' }}>
            <div className=" row">
                <div className="col-sm" id="icon-container" onClick={() => categorySelectHandler("electronics")}>
                    <img src={require('../../assets/icons/device.png').default} id="icon" alt="" />
                    <p className="h5">Electronics</p>
                </div>
                <div className="col-sm" id="icon-container" onClick={() => categorySelectHandler("women's clothing")}>
                    <img src={require('../../assets/icons/dress.png').default} id="icon" alt="" />
                    <p className="h5">Women's Fashion</p>
                </div>
                <div className="col-sm" id="icon-container" onClick={() => categorySelectHandler("women's clothing")}>
                    <img src={require('../../assets/icons/makeup.png').default} id="icon" alt="" />
                    <p className="h5">Beauty</p>
                </div>
                <div className="col-sm" id="icon-container" onClick={() => categorySelectHandler("men's clothing")}>
                    <img src={require('../../assets/icons/male-clothes.png').default} id="icon" alt="" />
                    <p className="h5">Men's Fashion</p>
                </div>
                <div className="col-sm" id="icon-container" onClick={() => categorySelectHandler("women's clothing")}>
                    <img src={require('../../assets/icons/skincare.png').default} id="icon" alt="" />
                    <p className="h5">Skin care</p>
                </div>
                <div className="col-sm" id="icon-container" onClick={() => categorySelectHandler("jewelery")}>
                    <img src={require('../../assets/icons/necklace.png').default} id="icon" alt="" />
                    <p className="h5">Jewelery </p>
                </div>
                <div className="col-sm" id="icon-container" onClick={() => categorySelectHandler("women's clothing")}>
                    <img src={require('../../assets/icons/weights.png').default} id="icon" alt="" />
                    <p className="h5">Sports &amp; Fitness </p>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Categories);