import React, { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import UserMenu from "../menuComponents/UserMenu";

import { FaSearch } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from "react-router-dom";
import UserMenuMobile from "../menuComponents/UserMenuMobile";

const Navbar = () => {
  const [isMobileOption, setIsMobileOption] = useState(false);
  const [isLogged, setisLogged] = useState(true);
  const closeMenuRef = useRef();

  const handleClickOutside = (e) => {
    if (!closeMenuRef.current.contains(e.target)) {
      setIsMobileOption(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileOption]);
  console.log(isMobileOption);

  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navLinks}>
        <div className={styles.barContainer}>
          <button
            ref={closeMenuRef}
            onClick={() => {
              isMobileOption
                ? setIsMobileOption(false)
                : setIsMobileOption(true);
            }}
          >
            <VscThreeBars
              style={{ opacity: isMobileOption ? "0" : "1" }}
              className={styles.burgerBar}
            />
          </button>
          <UserMenuMobile
            closeMenuRef={closeMenuRef}
            isMobileOption={isMobileOption}
            setIsMobileOption={setIsMobileOption}
          />
        </div>
        <li className={styles.logo}>
          <img src="./src/assets/Logo.png" alt="" />
        </li>
        <li className={styles.searchBar}>
          <input type="text" placeholder="Buscar..." />
          <FaSearch className={styles.searchBarIcon} />
        </li>

        {isLogged ? (
          <UserMenu />
        ) : (
          <li className={styles.loginButton}>
            <Link to="/login">
              <button>Ingresar</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
