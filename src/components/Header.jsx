import React from "react";
import styles from "./Header.module.css";
import { FaBell, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.search}>
          <input type="text" />
          <i>
            <FaSearch />
          </i>
        </div>
        <nav>
          <ul>
            <li>
              <FaBell />
            </li>
            <li>
              <FaHeart />
            </li>
            <li>
              <FaShoppingCart />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
