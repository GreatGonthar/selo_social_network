import React from "react";
import { Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import styles from "./UsersBox.module.css";

export default function OneUserBox() {
  return (
    <div className={styles.box}>
      <Avatar
        src="/broken-image.jpg"
        style={{
          width: 120,
          height: 120,
        }}
      />
      <div>
        <h3 className={styles.textContent}>IIIIIIIIIIIIIIIIIIII</h3>
        <p className={styles.textContent}>Pizza ,Burger, Bread</p>
        <p className={styles.textContent}>Pizza ,Burger, Bread</p>
        <p className={styles.textContent}>Pizza ,Burger, Bread</p>
        <p className={styles.textContent}>Pizza ,Burger, Bread</p>
      </div>
    </div>
  );
}
