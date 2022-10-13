import React from "react";
import styles from "./UserMenu.module.css";

import {
  FaBell,
  FaHeart,
  FaShoppingCart,
  FaUserAlt,
  FaHouseUser,
} from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import { RiLogoutBoxLine } from "react-icons/ri";

const UserMenu = () => {
  return (
    <ul className={`flex gap-3 mr-4 ${styles.container}`}>
      <li>
        <FaBell className={styles.iconAnimation} />
      </li>
      <li>
        <FaHeart className={styles.iconAnimation} />
      </li>
      <li>
        <FaShoppingCart className={styles.iconAnimation} />
      </li>
      <li>
        <FaHouseUser
          className={`${styles.iconAnimation} ${styles.userMenuIn}`}/>
        <div
          className={`${styles.userOptionsContainer} flex flex-col gap-2 justify-start bg-slate-50`}>
          <div className="flex gap-2 items-center pb-1 pt-1 border-t-2 border-b-2">
            <AiTwotoneSetting /> <a href="">Configuración</a>
          </div>
          <div className="flex gap-2 items-center pb-1 pt-1 border-t-2 border-b-2">
            <FaUserAlt /> <a href="">Perfil</a>
          </div>
          <div className="flex gap-2 items-center mt-2 pb-1 pt-1 border-t-2 border-b-2">
            <RiLogoutBoxLine />
            <button onClick={(data) => {}}>Cerrar Sesión</button>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default UserMenu;
