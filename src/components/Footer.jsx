import React from "react";
import styles from "./Footer.module.css";
import { FaShieldAlt, FaRegCreditCard } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.podesPagar}>
        <i>
          <FaRegCreditCard />
        </i>
        <h3>Pagá con MercadoPago</h3>
        <p>
          Podés pagar con tarjeta, débito y efectivo. <br />
          Hasta 12 cuotas sin interes <span>MercadoPago</span>!
        </p>
      </div>
      <div className={styles.compraSegura}>
        <i>
          {" "}
          <FaShieldAlt />{" "}
        </i>
        <h3>Seguridad de principio a fin</h3>
        <p>Sentite seguro de realizar tus compras</p>
      </div>
    </footer>
  );
};

export default Footer;
