import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const YOUTUBE_SERACH_API_URI = "https://www.googleapis.com/youtube/v3/search?";
const API_KEY = `${process.env.REACT_APP_YOUTUBE_API_KEY}`;

interface Props {
  keyword?: string;
}

export const YoutubeItem: React.VFC<Props> = ({ keyword }) => {
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    // クエリ文字列を定義する
    const params = {
      key: API_KEY,
      q: `${keyword}`, // 検索キーワード
      type: "video", // video,channel,playlistから選択できる
      maxResults: "1", // 結果の最大数
      order: "viewCount", // 結果の並び順を再生回数の多い順に
    };
    const queryParams = new URLSearchParams(params);

    // APIをコールする
    (async () => {
      try {
        const res = await axios.get(YOUTUBE_SERACH_API_URI + queryParams);
        const result = await JSON.parse(JSON.stringify(res.data));
        const firstItem = await result.items[0];
        const word = await firstItem.id.videoId;
        setVideoId(word);
      } catch (err) {
        console.log("上手くいきませんでした");
      }
    })();
  }, []);

  return (
    <Iframe
      title="サンプル"
      id="player"
      width="640"
      height="360"
      src={"https://www.youtube.com/embed/" + videoId}
      frameBorder="0"
      allowFullScreen
    />
  );
};

const Iframe = styled.iframe`
  display: block;
  margin: 0 auto;
`;
