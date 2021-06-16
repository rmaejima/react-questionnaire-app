import React, { useState, useEffect } from "react";

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
    fetch(YOUTUBE_SERACH_API_URI + queryParams)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("API success:", result);

          if (result.items && result.items.length !== 0) {
            const firstItem = result.items[0];
            setVideoId(firstItem.id.videoId);
          }
        },
        (error) => {
          console.error(error);
        }
      );
  }, []);

  return (
    <iframe
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

// export const Youtube = async () => {
//   // const [videoId, setVideoId] = useState("");
//   // クエリ文字列を定義する
//   const params = {
//     key: API_KEY,
//     q: "ヒカキン", // 検索キーワード
//     type: "video", // video,channel,playlistから選択できる
//     maxResults: "1", // 結果の最大数
//     order: "viewCount", // 結果の並び順を再生回数の多い順に
//   };
//   const queryParams = new URLSearchParams(params);
//   try {
//     const res = await fetch(YOUTUBE_SERACH_API_URI + queryParams);
//     const data = await res.json();
//     console.log(data);
//     return data;

//   } catch (err) {
//     console.log(err);
//   }
// };
