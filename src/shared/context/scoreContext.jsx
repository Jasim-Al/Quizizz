import { useState } from "react";
import { createContext } from "react";

export const ScoreContext = createContext({
  score: 0,
  setScore: () => {},
  streak: 0,
  setStreak: () => {},
});

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  return (
    <ScoreContext.Provider value={{ score, setScore, streak, setStreak }}>
      {children}
    </ScoreContext.Provider>
  );
};
