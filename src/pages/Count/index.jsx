import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

import Backdrop from "../../components/Backdrop";
import styles from "./count.module.css";
import { useNavigate } from "react-router-dom";

function Count() {
  const [counter, setCounter] = useState(3);
  const [countEnded, setCountEnded] = useState(false);
  const navigate = useNavigate();
  const control = useAnimation();
  useEffect(() => {
    control.stop();
    control.set({ fontSize: "1rem", width: "0%" });
    const timer =
      counter > -1 &&
      setInterval(() => setCounter((counter) => (counter -= 1)), 1000);
    control.start({
      fontSize: "5rem",
      width: "100%",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    });

    if (counter < 0) {
      navigate("/quiz/0");
    }

    return () => clearInterval(timer);
  }, [counter]);
  return (
    <AnimatePresence>
      {!countEnded && (
        <Backdrop key="counter">
          <motion.div
            initial={{ opacity: 0, scale: 0, width: "0%" }}
            animate={{ opacity: 1, scale: 1, width: "100%" }}
            exit={{ opacity: 0, scale: 0.5, width: "0%" }}
            className={styles.counter}
            transition={{
              duration: 0.5,
              type: "spring",
              bounce: 60,
              damping: 20,
            }}
          >
            <motion.span animate={control} className={styles.count}>
              {counter < 1 ? "Go!" : counter}
            </motion.span>
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
}

export default Count;
