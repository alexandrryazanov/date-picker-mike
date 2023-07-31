import React from "react";
import styles from "./styles.module.scss";

const Light = ({ color = "black", on = false }) => {
  return (
    <div
      className={styles.wrapper}
      style={{ background: on ? color : undefined }}
    />
  );
};

export default Light;
