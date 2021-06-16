import React from "react";
import { Link } from "react-router-dom";

import { useScoreContext } from "contexts/ScoreProvider";

export const Question3: React.VFC = () => {
  const { score, setScore } = useScoreContext();
  return (
    <>
      <div>質問3</div>
      <p>{score}</p>
      <button onClick={() => setScore(score + 1)}>+</button>
      <Link to="/result">次の質問へ移動</Link>
    </>
  );
};
