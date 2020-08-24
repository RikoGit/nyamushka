import React, { useState } from "react";
import cn from "classnames";
import plural from "plural-ru";

import Description from "./components/Description/index.jsx";
import styles from "./styles.css";

const Box = ({ box }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isSelectedHover, setIsSelectedHover] = useState(false);
  const [isSelectedHoverTitle, setIsSelectedHoverTitle] = useState(box.title);

  const onClick = () => {
    if (box.isDisabled) return;
    if (isSelected) {
      setIsSelectedHover(false);
      setIsSelectedHoverTitle(box.title);
    }

    setIsSelected(!isSelected);
  };
  const onMouseEnter = () => {
    if (box.isDisabled || isSelected) return;

    setIsHover(true);
  };
  const onMouseLeave = () => {
    if (box.isDisabled) return;
    if (isSelected) {
      setIsSelectedHover(true);
      setIsSelectedHoverTitle("Котэ не одобряет?");

      return;
    }
    setIsHover(false);
  };

  const hoverClass = isHover && styles.root_state_hover;
  const selectedClass = isSelected && styles.root_state_selected;
  const selectedHoverClass = isSelectedHover && styles.root_state_selectedHover;
  const disabledClass = box.isDisabled && styles.root_state_disabled;

  const portions = plural(box.portion, "порция", "порции", "порций");
  const bonus = plural(box.bonus, "мышь", "мыши", "мышей");

  return (
    <div
      className={cn(
        styles.root,
        hoverClass,
        selectedClass,
        selectedHoverClass,
        disabledClass
      )}
    >
      <div
        className={styles.box}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className={styles.title}>
          {isSelected ? isSelectedHoverTitle : box.title}
        </div>
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
          {box.isBig && <li>заказчик доволен</li>}
        </ul>
        <img
          className={styles.picture}
          alt={`${box.name} ${box.type}`}
          src={`images/${box.picture}`}
          widht="370"
          height="361"
        />
        <div className={styles.size}>
          <div className={styles.size__number}>
            {(box.size / 1000).toLocaleString("ru")}
          </div>
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
