import React, { forwardRef } from "react";
import styles from "./card.module.css";

const Card = forwardRef(({ children, className, onClick }, ref) => {
  return (
    <div className={`${styles.card} ${className}`} ref={ref} onClick={onClick}>
      {children}
    </div>
  );
});

export default Card;
