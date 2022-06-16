import React from "react";
import Input from "../Input";
import styles from "./LoginBlock.module.scss";
function LoginBlock() {
  const onLogin = () => {console.log("login")};
  return (
    <div>
      <div className={styles.root}>
        <div className={styles.title}>Email:</div>
        <Input placeholder="Email" required={true} type={"text"}></Input>
        <div className={styles.title}>Password:</div>
        <Input placeholder="Password" required={true} type={"password"}></Input>
        <button className={"button " + styles.button} onClick={onLogin}>
          Войти
        </button>
      </div>
    </div>
  );
}

export default LoginBlock;
