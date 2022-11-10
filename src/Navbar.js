import { NavLink } from "react-router-dom";
import Icon from "./Icon";
import { useState, useEffect } from "react";
import sun from "./images/sun.png";
import moon from "./images/moon.png";
import githubWhite from "./images/github-white.png";
import githubBlack from "./images/github-black.png";
import twitterWhite from "./images/twitter-white.png";
import twitterBlack from "./images/twitter-black.png";

export default function Navbar(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const cartCount = props.cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const handleButtonClick = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        Rice Labs
      </NavLink>
      <ul>
        <li className="nav-item">
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active" to="/about">
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" to="/products">
            Products
          </NavLink>
        </li>
      </ul>
      <div className="cart-div"></div>
      <div className="icon-div">
        <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">
          Cart ({cartCount})
        </NavLink>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://twitter.com/ricefarmernft"
        >
          <Icon src={isDarkTheme ? twitterWhite : twitterBlack} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/ricefarmernft"
        >
          <Icon src={isDarkTheme ? githubWhite : githubBlack} />
        </a>
        {isDarkTheme ? (
          <Icon src={sun} onIconClick={handleButtonClick} />
        ) : (
          <Icon src={moon} onIconClick={handleButtonClick} />
        )}
      </div>
    </nav>
  );
}
