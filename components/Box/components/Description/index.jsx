import React, { useState } from "react";
import cn from "classnames";

import styles from "./styles.css";

const Description = ({
  isDisabled,
  isSelected,
  type,
  description,
  onClick,
}) => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = () => setIsHover(true);
  const onMouseLeave = () => setIsHover(false);

  const descriptionDefault = (
    <>
      Чего сидишь? Порадуй котэ,{" "}
      <span
        className={cn(styles.button, isHover && styles.button_state_hover)}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        купи.
      </span>
    </>
  );

  return (
    <div
      class={cn(
        styles.description,
        isDisabled && styles.description_state_disabled
      )}
    >
      {isDisabled
        ? `Печалька, ${type} закончился.`
        : isSelected
        ? description
        : descriptionDefault}
    </div>
  );
};

export default Description;
