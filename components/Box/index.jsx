import React, { useState } from "react";
import cn from "classnames";
import plural from "plural-ru";

import Description from "./components/Description/index.jsx";
import styles from "./styles.css";

const Box = ({ box }) => {
  const [isSelected, setIsSelected] = useState(box.isSelected);

  const selectedBoxClass = isSelected ? styles.root_state_selected : "";
  const disabledBoxClass = box.isDisabled ? styles.root_state_disabled : "";
  const selectedHoverBoxClass = box.isSelectedHover
    ? styles.root_state_selectedHover
    : "";

  const onClick = () => {
    if (box.isDisabled) return;

    setIsSelected(!isSelected);
  };

  const portions = plural(box.portion, "порция", "порции", "порций");
  const bonus = plural(box.bonus, "мышь", "мыши", "мышей");

  return (
    <div
      className={cn(
        styles.root,
        selectedBoxClass,
        selectedHoverBoxClass,
        disabledBoxClass
      )}
    >
      <div className={styles.box} onClick={onClick}>
        <div className={styles.title}>{box.title}</div>
        <div className={styles.name}>
          {box.name}
          <div className={styles.type}>{box.type}</div>
        </div>
        <ul className={styles.info}>
          <li>
            <strong>{box.portion}</strong> {portions}
          </li>
          <li>
            {box.bonus !== 1 ? <strong>{box.bonus} </strong> : ""}
            {bonus} в подарок
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
          <span className={styles.size__number}>
            {(box.size / 1000).toLocaleString("ru")}
          </span>
          <br />
          кг
        </div>
      </div>
      <Description
        isDisabled={box.isDisabled}
        isSelected={isSelected}
        type={box.type}
        description={box.description}
        onClick={onClick}
      />
    </div>
  );
};

export default Box;
