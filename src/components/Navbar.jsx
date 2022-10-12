import React, { useState } from "react";
import styles from "./Navbar.module.css";
import UserMenu from '../menuComponents/UserMenu';

import { FaSearch } from "react-icons/fa";
import { VscThreeBars, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileOption, setIsMobileOption] = useState(true);
  const [isLogged, setisLogged] = useState(false)


  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navLinks}>
        <div className={styles.barContainer}>
          <VscThreeBars
            onClick={() => {
              isMobileOption
                ? setIsMobileOption(false)
                : setIsMobileOption(true);
            }}
            style={{ opacity: isMobileOption ? "0" : "1" }}
            className={styles.burgerBar}
          />
          <VscClose
            style={{ opacity: isMobileOption ? "1" : "0" }}
            className={styles.closeBurger}
          />
        </div>
        <li className={styles.logo}><img src="./src/assets/Logo.png" alt="" /></li>
        <li className={styles.searchBar}>
          <input type="text" placeholder="Buscar..." />
          <FaSearch className={styles.searchBarIcon} />
        </li>
        { isLogged ? ( 
            <UserMenu/>
          ) : (
            <li className={styles.loginButton}>
          <Link to="/login">
            <button>Ingresar</button>
          </Link>
          </li>
        ) }
      </ul>
    </nav>
  );
};

export default Navbar;
