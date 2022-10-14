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
        className={`${styles.menuItems} flex flex-col pt-6 bg-slate-50 ${
          isMobileOption ? styles.menuAnimationIn : styles.menuAnimationOut
        }`}
      >

        <li>
          <IoCloseSharp className={styles.closeIcon} onClick={() => {
            setIsMobileOption(false)
          }}/>
        </li>
        <li style={{animation: isMobileOption ? `${styles.itemAnimation} 1s cubic-bezier(1,-0.04,0,.98)` : undefined}}>
          <FaBell/>
          <p>Notificaciones</p>
        </li>
        <li style={{animation: isMobileOption ? `${styles.itemAnimation} 1.2s cubic-bezier(1,-0.04,0,.98)` : undefined}}>
          <FaHeart/>
          <p>Favoritos</p>
        </li>
        <li style={{animation: isMobileOption ? `${styles.itemAnimation} 1.4s cubic-bezier(1,-0.04,0,.98)` : undefined}}>
          <FaShoppingCart />
          <a href="#asd"> Carrito</a>
        </li>
        <li style={{animation: isMobileOption ? `${styles.itemAnimation} 1.6s cubic-bezier(1,-0.04,0,.98)` : undefined}}>
          <AiFillShopping />
          <p>Compras</p>
        </li >
        <li
           style={{animation: isMobileOption ? `${styles.itemAnimation} 1.8s cubic-bezier(1,-0.04,0,.98)` : undefined}}
          className="bg-slate-200 w-full h-10"
        >
          <p style={{margin: "0 autO"}}>CERRAR SESIÓN</p>
        </li>
          <span style={{animation: isMobileOption ? `${styles.itemAnimation} 2.3s cubic-bezier(1,-0.04,0,.98)` : undefined}}> a</span>
      </div>
    </aside>
  );
};

export default UserMenuMobile;
