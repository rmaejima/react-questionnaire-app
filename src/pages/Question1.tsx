import React from "react";
import { Link } from "react-router-dom";

import { useScoreContext } from "contexts/ScoreProvider";

export const Question1: React.VFC = () => {
  const { score, setScore } = useScoreContext();
  return (
    <>
      <div>質問1</div>
      <p>{score}</p>
      <button onClick={() => setScore(score + 1)}>+</button>
      <Link to="/q2">次の質問へ移動</Link>
    </>
  );
};
