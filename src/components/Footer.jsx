import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`grid grid-cols-1 justify-items-start sm:grid-cols-3 gap-3 sm:justify-items-center ${styles.footerContainer}`}>
      <div>
        <h3>Equipo de desarrollo</h3>
        <p>Gonzalo Errandonea</p>
        <p>Tomas Alaluf</p>
        <p>Gonzalo Romero</p>
        <p>Alexis Brunetti</p>
        <p>Gabriel Ramos</p>
      </div>
      <div>
        <h3>Enlaces Útiles</h3>
        <p>Sobre nosotros</p>
        <p>Politicas de uso</p>
        <p>Haz un reclamo</p>
        <p>Contactate con nosotros</p>
      </div>
      <div>
        <h3>Información de Contacto</h3>
          <p><strong> Email:</strong> tucan@example.com</p>
          <p><strong> Direccion:</strong> siempreviva 123</p>
          <p><strong> Teléfono:</strong> 11-6666666</p>
      </div>
    </footer>
  );
};

export default Footer;
