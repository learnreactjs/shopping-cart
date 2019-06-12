import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Product from './pages/Product.js';
import Cart from './pages/Cart.js';

function App() {

  return (
      <DragDropContextProvider backend={HTML5Backend}>
       <Router>
        <div>
          <div className="sidebar bg-dark">
            <div className="header text-white">
              <p className="app-name">Shopping-Cart</p>
              <hr/>
            </div>
            <nav>
              <div className="sidebar-list">
                <div className="sidebar-item">
                  <NavLink className="sidebar-link" activeClassName="active" to="/product">Product</NavLink>
                </div>
                <div className="sidebar-item">
                  <NavLink className="sidebar-link" activeClassName="active" to="/my-cart">My Cart</NavLink>
                </div>
              </div>
            </nav>
          </div>
          <div className="content">
            <Route path="/" exact component={Product} />
            <Route path="/product" component={Product} />
            <Route path="/my-cart" component={Cart} />
          </div>
        </div>
      </Router>
    </DragDropContextProvider>
  );
}

export default App;
