import React from 'react'
import styles from './Navbar.module.css'
import { FaSearch, FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
        <ul className={styles.navLinks}>
        <FaBars className={styles.burgerBar}/>
            <li className={styles.logo}>LOGO</li>
            <li className={styles.searchBar}><input type="text" placeholder='Buscar...' />
            <FaSearch className={styles.searchBarIcon}/>
            </li>
            <li className={styles.loginButton}><button>Ingresar</button></li>
        </ul>
    </nav>
  )
}

export default Navbar