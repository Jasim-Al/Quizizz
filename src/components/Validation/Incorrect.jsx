import React from "react";
import Card from "./Card";
import styles from "./validation.module.css";

function Incorrect({ options }) {
  return (
    <div className={styles.incorrect}>
      <h1>Incorrect!</h1>
      <lottie-player
        src="https://assets10.lottiefiles.com/private_files/lf30_8wacjhqf.json"
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

export default Incorrect;
