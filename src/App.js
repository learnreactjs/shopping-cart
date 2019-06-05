import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Product from './pages/Product.js';
import Cart from './pages/Cart.js';

function App() {

  return (
       <Router>
        <div>
          <div className="sidebar bg-dark">
            <div className="header text-white">
              <p className="app-name">Shopping-Cart</p>
              <hr/>
            </div>
            <nav>
              <div className="sidebar-list">
                <div className="sidebar-item active">
                  <Link className="sidebar-link" to="/">Product</Link>
                </div>
                <div className="sidebar-item">
                  <Link className="sidebar-link" to="/my-cart">My Cart</Link>
                </div>
              </div>
            </nav>
          </div>
          <div className="content">
            <Route path="/" exact component={Product} />
            <Route path="/my-cart" component={Cart} />
          </div>
        </div>
      </Router>
  );
}

export default App;
