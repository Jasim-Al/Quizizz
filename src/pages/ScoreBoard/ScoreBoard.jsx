import React from "react";
import { useContext } from "react";
import Card from "../../components/shared/Card";
import { ScoreContext } from "../../shared/context/scoreContext";

function ScoreBoard() {
  const { score, streak } = useContext(ScoreContext);
  return (
    <div>
      <h2>Score Board</h2>
      <Card>
        <h3>Score : {score}</h3>
        <h3>Winning streak : {streak}</h3>
      </Card>
    </div>
  );
}

export default ScoreBoard;
