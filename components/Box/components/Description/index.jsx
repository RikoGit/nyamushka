import React from "react";
import cn from "classnames";

import styles from "./styles.css";

const Description = ({
  isDisabled,
  isSelected,
  type,
  description,
  onClick,
}) => {
  const descriptionDefault = (
    <>
      Чего сидишь? Порадуй котэ,{" "}
      <span className={styles.button} onClick={onClick}>
        купи.
      </span>
    </>
  );

  return (
    <div
      class={cn(
        styles.description,
        isDisabled ? styles.description_state_disabled : ""
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
