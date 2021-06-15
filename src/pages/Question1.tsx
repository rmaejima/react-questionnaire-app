import React from "react";
import { Link } from "react-router-dom";

export const Question1: React.VFC = () => {
  return (
    <>
      <div>ホームです</div>
      <Link to="/q2">次の質問へ移動</Link>
    </>
  );
};
