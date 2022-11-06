import React, { useState } from "react";
import Card from "../shared/Card";
import styles from "./option.module.css";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

function Option({ option, index, checkAnswer, setOptions }) {
  const [isAnswered, setIsAnswered] = useState(false);

  const onAnswer = (option) => {
    if (!isAnswered) {
      checkAnswer(option.answer);

      if (!option.answer) {
        setOptions((options) => [...options, option]);
      }
      setIsAnswered(true);
    }
  };

  return (
    <MotionCard
      initial={{
        opacity: 0,
        y: "-100vh",
        transition: { duration: 0.5 + index / 10, ease: "easeIn" },
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 + index / 10, ease: "easeIn" },
      }}
      exit={{
        opacity: 0,
        y: "100vh",
        transition: { duration: 0.5 + index / 10, ease: "easeIn" },
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      className={`${styles.option} ${styles["bg" + index]}`}
      onClick={onAnswer.bind(this, option)}
    >
      {option.title}
    </MotionCard>
  );
}

export default Option;
