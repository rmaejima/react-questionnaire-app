import React from "react";
import { Link } from "react-router-dom";

export const Home: React.VFC = () => {
  return (
    <>
      <div>ホームです</div>
      <Link to="/q1">質問へ移動</Link>
    </>
  );
};
