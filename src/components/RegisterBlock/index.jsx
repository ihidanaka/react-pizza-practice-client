import React from "react";
import Input from "../Input";
import styles from "./RegisterBlock.module.scss";
function LoginBlock() {
  const onRegister = () => {
    console.log("register")
  };
  return (
    <div>
      <div className={styles.root}>
      <div className={styles.title}>Name:</div>
        <Input placeholder="Name" required={true} type={"text"}></Input>
        <div className={styles.title}>Email:</div>
        <Input placeholder="Email" required={true} type={"text"}></Input>
        <div className={styles.title}>Password:</div>
        <Input placeholder="Password" required={true} type={"password"}></Input>
        <button className={"button " + styles.button} onClick = {onRegister}>
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
}

export default LoginBlock;
