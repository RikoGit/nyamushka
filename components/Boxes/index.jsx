import React from "react";

import Box from "../Box/index.jsx";
import styles from "./styles.css";

const Boxes = ({ boxes }) => (
  <div className={styles.root}>
    <header class={styles.title}>Ты сегодня покормил кота?</header>
    <ul className={styles.boxes}>
      {boxes.map((box) => (
        <li className={styles.box}>
          <Box box={box} />
        </li>
      ))}
    </ul>
  </div>
);

export default Boxes;
