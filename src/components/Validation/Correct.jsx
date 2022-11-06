import React from "react";
import styles from "./validation.module.css";
import Card from "./Card";

function Correct({ options }) {
  return (
    <div className={styles.correct}>
      <h1>Correct!</h1>
      <lottie-player
        src="https://assets1.lottiefiles.com/packages/lf20_q7hiluze.json"
        background="transparent"
        speed="1"
        style={{ width: "300px", height: "300px" }}
        autoplay
      ></lottie-player>
      <div className={styles.container}>
        {options.map((option, index) => (
          <Card
            title={option.title}
            key={index}
            color={option.answer ? "green" : "red"}
          />
        ))}
      </div>
    </div>
  );
}

export default Correct;
