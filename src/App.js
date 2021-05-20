import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Auth from './Auth/Auth';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import axios from './aixos';
import './App.css';

class App extends Component {

  /* componentDidMount() {
    const user = {
      cart: [],
      email: "abc@123.com",
      id: 2,
      orders: [],
      password: "abc123",
      role: "user"
    }

    const d = {
      djad: 'skjab'
    }

    let data = { ...user };
    data.cart = user.cart.concat(d)
    console.log(data);

  } */

  render() {

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/products" exact component={ProductList} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    );
  }

}

export default App;
