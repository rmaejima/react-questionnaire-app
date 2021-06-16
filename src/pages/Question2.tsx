import React from "react";
import { Link } from "react-router-dom";

import { usePointContext } from "contexts/PointProvider";

export const Question2: React.VFC = () => {
  const { point, setPoint } = usePointContext();
  return (
    <>
      <div>質問2</div>
      <p>{point}</p>
      <button onClick={() => setPoint(point + 1)}>+</button>
      <Link to="/q3">次の質問へ移動</Link>
    </>
  );
};
