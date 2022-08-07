import { getRandomColor } from "../helpers";
import React from "react";
import categories from "../Pages/Categories";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function Header() {
  const randomColor = getRandomColor();
  return (
    <header
      className="header"
      style={{
        // @ts-ignore
        ["--border-colour"]: randomColor
      }}
    >
      <div className="header__logo" style={{ color: randomColor }}>
        Hoxbay
      </div>

      <nav className="header__nav">
        <ul>
          <li>
            <Link to= "/products" >
            Home
            </Link>
          </li>
          <li>
            <Link to="/categories">
            Categories
            </Link>
          </li>
          <li>
            <Link to="/basket">
            Basket
            </Link>
          </li>
        </ul>
      </nav>
     
    </header>
  );
}
export default Header;
