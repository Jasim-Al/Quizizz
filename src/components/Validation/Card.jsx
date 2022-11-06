import React from "react";
import MCard from "../shared/Card";
import styles from "./card.module.css";

function Card({ title, color }) {
  return (
    <MCard className={`${styles.card} ${styles[color]}`}>
      <h2 className={styles.title}>{title}</h2>
    </MCard>
  );
}

export default Card;
