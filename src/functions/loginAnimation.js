import styles from "../pages/Login.module.css"

function animaciones() {
    const button = document.getElementById("button")
    const background = document.getElementById("background");
    const login = document.getElementById("login");
    const signUp = document.getElementById("sign-up");

    if (background.classList.contains(styles.bgAnimation)) {
      background.classList.remove(styles.bgAnimation);
      background.classList.add(styles.bgOut);

      button.classList.remove(styles.button25Animation);
      button.innerText = "Log in?";

      login.classList.add(styles.loginOut);

      signUp.classList.add(styles.signUpIn);
    } else {
      background.classList.add(styles.bgAnimation);
      background.classList.remove(styles.bgOut);

      button.classList.add(styles.button25Animation);
      button.innerText = "Sign up?";

      login.classList.add(styles.loginIn);
      if (login.classList.contains(styles.loginOut))
        login.classList.remove(styles.loginOut);

      signUp.classList.add(styles.signUpOut);
      signUp.classList.remove(styles.signUpIn);
    }
  }

  export default animaciones;