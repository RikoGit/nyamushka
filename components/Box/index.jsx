import React, { useState } from "react";
import cn from "classnames";

import Description from "./components/Description/index.jsx";
import styles from "./styles.css";

const Box = ({ box }) => {
  const [isSelected, setIsSelected] = useState(box.isSelected);

  const selectedBoxClass = isSelected ? styles.root_state_selected : "";
  const disabledBoxClass = box.isDisabled ? styles.root_state_disabled : "";
  const selectedHoverBoxClass = box.isSelectedHover
    ? styles.root_state_selectedHover
    : "";

  return (
    <div
      className={cn(
        styles.root,
        selectedBoxClass,
        selectedHoverBoxClass,
        disabledBoxClass
      )}
    >
      <div
        className={styles.box}
        onClick={() => {
          if (box.isDisabled) return;
          setIsSelected(!isSelected);
        }}
      >
        <div className={styles.title}>{box.title}</div>
        <div className={styles.name}>
          {box.name}
          <span>{box.type}</span>
        </div>
        <ul className={styles.info}>
          <li>
            <strong>40</strong> порций
          </li>
          <li>
            <strong>2</strong> мыши в подарок
          </li>
          <li>заказчик доволен</li>
        </ul>
        <img
          className={styles.picture}
          alt={`${box.name} ${box.type}`}
          src={`../../images/${box.picture}`}
          widht="370"
          height="361"
        />
        <div className={styles.size}>
          <span className={styles.size__number}>{box.size / 1000}</span>
          <br />
          кг
        </div>
      </div>
      <Description
        isDisabled={box.isDisabled}
        isSelected={isSelected}
        type={box.type}
        description={box.description}
      />
    </div>
  );
};

export default Box;
