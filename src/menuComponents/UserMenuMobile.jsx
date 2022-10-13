import React from "react";
import styles from "./UserMenuMobile.module.css";

import { AiFillShopping } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { FaBell, FaHeart, FaShoppingCart } from "react-icons/fa";

const UserMenuMobile = ({ isMobileOption, setIsMobileOption, closeMenuRef }) => {
    
  return (
    <aside
      ref={closeMenuRef}
      className={styles.container}
      style={{ pointerEvents: isMobileOption ? "all" : "none" }}
    >
      <div
        className={`${styles.menuItems} flex flex-col gap-2 pt-6 bg-slate-50 ${
          isMobileOption ? styles.menuAnimationIn : styles.menuAnimationOut
        }`}
      >
        <li>
          <IoCloseSharp className={styles.closeIcon} onClick={() => {
            setIsMobileOption(false)
          }}/>
        </li>
        <li>
          <FaBell />
          <p>Notificaciones</p>
        </li>
        <li>
          <FaHeart />
          <p>Favoritos</p>
        </li>
        <li>
          <FaShoppingCart />
          <a href="#asd"> Carrito</a>
        </li>
        <li>
          <AiFillShopping />
          <p>Compras</p>
        </li>
        <li
          className="bg-slate-200 w-full h-10"
          style={{ textAlign: "center" }}
        >
          <p>CERRAR SESIÓN</p>
        </li>
      </div>
      <span></span>
    </aside>
  );
};

export default UserMenuMobile;
