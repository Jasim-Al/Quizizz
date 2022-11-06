import React, { useEffect } from "react";
import Option from "./Option";
import styles from "./options.module.css";

function Options({ options, checkAnswer, setOptions }) {
  useEffect(() => {
    setOptions((mainOptions) => [
      ...mainOptions,
      ...options.filter(
        (option) => option.answer === true && !mainOptions.includes(option)
      ),
    ]);
  }, []);

  return (
    <div className={styles.options}>
      {options.length > 0 ? (
        options.map((option, index) => (
          <Option
            checkAnswer={checkAnswer}
            option={option}
            index={index}
            key={index}
            setOptions={setOptions}
          />
        ))
      ) : (
        <h2>No options ware provided</h2>
      )}
    </div>
  );
}

export default Options;
