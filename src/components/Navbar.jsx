import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaSearch } from "react-icons/fa";
import {VscThreeBars, VscClose} from "react-icons/vsc"
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isMobileOption, setIsMobileOption] = useState(false);
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navLinks}>
        <div className={styles.barContainer}>
        <VscThreeBars
          onClick={() => {isMobileOption? setIsMobileOption(false) : setIsMobileOption(true)}}
          style={{ opacity: isMobileOption? "0" : "1"}}
          className={styles.burgerBar}
          />
        <VscClose
          style={{ opacity: isMobileOption ? "1" : "0" }}
          className={styles.closeBurger}
          />
          </div>
        <li className={styles.logo}>LOGO</li>
        <li className={styles.searchBar}>
          <input type="text" placeholder="Buscar..." />
          <FaSearch className={styles.searchBarIcon} />
        </li>
        <li className={styles.loginButton}>
          <Link to="/login"><button>Ingresar</button></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
