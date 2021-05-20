import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Auth from './Auth/Auth';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import './App.css';

class App extends Component {

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
