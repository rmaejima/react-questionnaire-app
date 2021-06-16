import React from "react";
import { Link } from "react-router-dom";

export const NotFound: React.VFC = () => {
  return (
    <>
      <div>ページが見つかりませんでした</div>
      <Link to="/">ホームへ移動</Link>
    </>
  );
};
