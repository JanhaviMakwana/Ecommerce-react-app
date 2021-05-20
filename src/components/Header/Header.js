import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { withState } from '../../ecom-context';
import { withRouter } from 'react-router-dom';
import './Header.css';


const Header = (props) => {

    const [keyword, setKeyword] = useState('');
    console.log(props.state.user);
    const userType = props.state.user ? props.state.user.role : null;
    const cart = props.state.user? props.state.user.cart: [];

    const keywordChangehandler = (event) => {
        setKeyword(event.target.value);

    };

    const searchHandler = (event) => {
        event.preventDefault();
        props.history.push(`/products?q=${keyword}`);
    };

    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark d-flex flex-row">
            <p className="text-left text-white h6">Ecommerce</p>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li class="nav-item active ml-3 h6">
                        <NavLink to="/" className="nav-link">
                            Home
                        </NavLink>
                    </li>
                    {userType !== 'admin' && <li class="nav-item ml-3 h6">
                        <NavLink to="/orders" className="nav-link">
                            Orders
                        </NavLink>
                    </li>}
                    {userType !== 'admin' && <li>
                        <form className="form-inline" onSubmit={searchHandler}>
                            <input
                                className="form-control search-input"
                                aria-label="Search"
                                placeholder="Search"
                                value={keyword}
                                onChange={keywordChangehandler}
                            />
                        </form>
                    </li>}
                    <li class="nav-item ml-3">
                        <button className="nav-link btn auth-btn">
                            <p className="text-white h6">
                                {userType === null ? "Login" : "Logout"}
                            </p>
                        </button>
                    </li>
                    {userType !== 'admin' && <li class="nav-item ml-3 h6">
                        <NavLink to="/cart" className="nav-link">
                            Cart<span className="text-warning pl-2">{cart.length}</span>
                        </NavLink>
                    </li>}
                </ul>
            </div>
        </nav>
    );
}

export default withRouter(withState(Header));