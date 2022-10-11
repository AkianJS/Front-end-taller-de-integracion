import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Login.module.css";
import setUserData from "../utils/setUserData";

const Login = () => {
  function animaciones() {
    const button = document.getElementById("button");
    const background = document.getElementById("background");
    const login = document.getElementById("login");
    const signUp = document.getElementById("sign-up");

    if (background.classList.contains(styles.bgAnimation)) {
      background.classList.remove(styles.bgAnimation);
      background.classList.add(styles.bgOut);

      button.classList.remove(styles.button25Animation);
      button.innerText = "Entrar?";

      login.classList.add(styles.loginOut);

      signUp.classList.add(styles.signUpIn);
    } else {
      background.classList.add(styles.bgAnimation);
      background.classList.remove(styles.bgOut);

      button.classList.add(styles.button25Animation);
      button.innerText = "Registrarse?";

      login.classList.add(styles.loginIn);
      if (login.classList.contains(styles.loginOut))
        login.classList.remove(styles.loginOut);

      signUp.classList.add(styles.signUpOut);
      signUp.classList.remove(styles.signUpIn);
    }
  }

  //   Manejo del registro con react hook form
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setUserData(data);
  };

  //   Manejo del login
  return (
    <div>
      <span className={styles.background} id="background"></span>
      <button className={styles.button25} id="button" onClick={animaciones}>
        Entrar?
      </button>
      <div className={styles.gridContainer}>
        <section className={`${styles.loginContainer} ${styles.formAlign}`}>
          <form id="login" className={`${styles.signInForm} ${styles.forms}`}>
            <h4>Entrar</h4>
            <div className={styles.inputAnimation}>
              <input required="required" type="text" name="email" />
              <span>Email</span>
            </div>
            <div className={styles.inputAnimation}>
              <input required="required" type="text" name="pass" id="pass" />
              <span>Contraseña</span>
            </div>
          </form>
        </section>

        {/* Seccion de registro */}
        <section className={`${styles.signUp} ${styles.formAlign}`}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            id="sign-up"
            className={`${styles.signUpForm} ${styles.forms}`}
          >
            <h4>Registrarse</h4>

            <div className={styles.inputAnimation}>
              <input
                type="number"
                name="cuil"
                required="required"
                {...register("cuil")}
              />
              <span>CUIL</span>
            </div>

            <div className={styles.inputAnimation}>
              <input
                type="text"
                required="required"
                name="nombre"
                {...register("nombre")}
              />
              <span>Nombre</span>
            </div>

            <div className={styles.inputAnimation}>
              <input
                type="password"
                name="pass"
                required="required"
                {...register("contraseña", {
                  required: true,
                })}
              />
              <span>Contraseña</span>
            </div>
            <div className={styles.inputAnimation}>
              <input
                type="email"
                required="required"
                name="pass-up"
                {...register("correo")}
              />
              <span>Email</span>
            </div>
            <input
              type="submit"
              value="Registrar"
              className={styles.submitButton}
            />
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
