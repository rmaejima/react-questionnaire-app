import React from "react";
import { Link } from "react-router-dom";

import { useScoreContext } from "contexts/ScoreProvider";

export const Result: React.VFC = () => {
  const { score, setScore } = useScoreContext();
  return (
    <>
      <p>あなたの得点は{score}です</p>
      <Link to="/">ホームへ移動</Link>
    </>
  );
};
