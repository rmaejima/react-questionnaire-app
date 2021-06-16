import React from "react";
import { Link } from "react-router-dom";

import { useScoreContext } from "contexts/ScoreProvider";

export const Question2: React.VFC = () => {
  const { score, setScore } = useScoreContext();
  return (
    <>
      <div>質問2</div>
      <p>{score}</p>
      <button onClick={() => setScore(score + 1)}>+</button>
      <Link to="/q3">次の質問へ移動</Link>
    </>
  );
};
