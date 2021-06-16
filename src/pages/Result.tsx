import React from "react";
import { Link } from "react-router-dom";

import { usePointContext } from "contexts/PointProvider";

export const Result: React.VFC = () => {
  const { point, setPoint } = usePointContext();
  return (
    <>
      <p>あなたの得点は{point}です</p>
      <Link to="/">ホームへ移動</Link>
    </>
  );
};
