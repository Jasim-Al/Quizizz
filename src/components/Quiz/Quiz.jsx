import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useContext } from "react";
import { ScoreContext } from "../../shared/context/scoreContext";
import Validation from "../Validation";
import Options from "./Options";
import styles from "./quiz.module.css";

function Quiz({ quiz, index }) {
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [options, setOptions] = useState([]);
  const [count, setCount] = useState(7);
  const { setScore, setStreak } = useContext(ScoreContext);

  const checkAnswer = (isCorrect) => {
    setIsAnswered(true);

    if (isCorrect) {
      setScore((score) => (score += 640));
      setStreak((streak) => (streak += 1));
      setIsCorrect(isCorrect);
    } else {
      setStreak(0);
    }
  };

  useEffect(() => {
    const timer =
      count > 0 && setInterval(() => setCount((count) => (count -= 1)), 1000);
    if (count === 0) {
      checkAnswer(false);
    }
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className={styles.quiz}>
      <AnimatePresence>
        {!isAnswered && (
          <>
            <motion.div
              className={`${styles.timer} ${count < 4 && styles.red}`}
              initial={{ width: "100vw" }}
              animate={{ width: "0" }}
              transition={{ duration: 7 }}
            />
            <motion.div
              key="question"
              initial={{ opacity: 0, y: "-100vh" }}
              animate={{ opacity: 1, y: "0", transition: { duration: 0.7 } }}
              exit={{ opacity: 0, y: "-100vh" }}
              className={styles.question}
            >
              <h2>{quiz.question}</h2>
              <Options
                checkAnswer={checkAnswer}
                setOptions={setOptions}
                options={quiz.options}
              />
            </motion.div>
          </>
        )}
        {isAnswered && (
          <Validation
            isCorrect={isCorrect}
            options={options}
            setIsAnswered={setIsAnswered}
            setIsCorrect={setIsCorrect}
            setOptions={setOptions}
            index={index}
            setCount={setCount}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Quiz;
