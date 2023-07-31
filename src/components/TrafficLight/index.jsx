import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Light from "./Light";

const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const TrafficLight = ({ rules, onChange }) => {
  const [[redOn, yellowOn, greenOn], setColors] = useState([0, 0, 0]);

  useEffect(() => {
    (async () => {
      while (true) {
        for (const rule of rules) {
          onChange(rule.lights);
          setColors(rule.lights);
          await delay(rule.time * 1000);
        }
      }
    })();
  }, [rules, onChange]);

  return (
    <div className={styles.wrapper}>
      <Light color="red" on={Boolean(redOn)} />
      <Light color="yellow" on={Boolean(yellowOn)} />
      <Light color="green" on={Boolean(greenOn)} />
    </div>
  );
};

export default TrafficLight;
