import React from "react";

import Boxes from "../Boxes/index.jsx";
import styles from "./styles.css";

const App = () => {
  const boxes = [
    {
      title: "Сказочное заморское яство",
      name: "Нямушка",
      type: "с рыбой",
      picture: "nyamushka.png",
      description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
      size: 2000,
      portion: 40,
      bonus: 2,
      isDisabled: false,
    },
    {
      title: "Сказочное заморское яство",
      name: "Нямушка",
      type: "с курой",
      picture: "nyamushka.png",
      description: "Филе из цыплят с трюфелями в бульоне.",
      size: 500,
      portion: 10,
      bonus: 1,
      isDisabled: false,
    },
    {
      title: "Сказочное заморское яство",
      name: "Нямушка",
      type: "с фуа-гра",
      picture: "nyamushka.png",
      description: "Печень утки разварная с артишоками",
      size: 5000,
      portion: 100,
      bonus: 5,
      isBig: true,
      isDisabled: true,
    },
  ];

  return (
    <main className={styles.root}>
      <Boxes boxes={boxes} />
    </main>
  );
};

export default App;
