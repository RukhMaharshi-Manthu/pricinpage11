import React from "react";
import { Link } from "react-router-dom";

export function NavBar({ props }) {
  return (
    <header className="nav-bar">
      <div className="container">
        <ul className="flex menu">
          <li>
            <Link to="/">
              <h5>Home</h5>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <h5>About</h5>
            </Link>
          </li>
          <li>
            <Link to="/shop">
             <label>
                <h5>shop</h5>
              </label>
              <select>
                <option></option>
                <option>All Products</option>
                <option>Popular Items</option>
                <option>New Arrivals</option>
              </select>
              
            </Link>
          </li>

          <li>
            <Link to="/addItem">
              <i className="fas fa-shopping-cart text-light ms-auto me-1"></i>
              <span className="text-light"> add to cart</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
