import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Correct from "./Correct";
import Incorrect from "./Incorrect";
import styles from "./validation.module.css";

function Validation({
  options,
  isCorrect,
  setIsAnswered,
  setIsCorrect,
  setOptions,
  index,
  setCount,
}) {
  const [counter, setCounter] = useState(3);
  const navigate = useNavigate();
  useEffect(() => {
    const timer =
      counter > 0 &&
      setInterval(() => setCounter((counter) => (counter -= 1)), 1000);

    if (counter === 0) {
      setIsAnswered(false);
      setIsCorrect(false);
      setOptions([]);
      setCount(7);
      if (Number(index) + 1 < 4) {
        navigate(`/quiz/${Number(index) + 1}`);
      } else {
        navigate("/score");
      }
    }
    return () => clearInterval(timer);
  }, [counter]);
  return (
    <div className={styles.validation}>
      {isCorrect && <Correct options={options} />}
      {!isCorrect && <Incorrect options={options} />}
    </div>
  );
}

export default Validation;
