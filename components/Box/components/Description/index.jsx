import React from "react";
import cn from "classnames";

import styles from "./styles.css";

const Description = ({ isDisabled, isSelected, type, description }) => {
  console.log(isSelected);

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
        : "Чего сидишь? Порадуй котэ, <span>купи.</span>"}
    </div>
  );
};

export default Description;
