import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import { YoutubeVideo } from "types/youtube";

const YOUTUBE_SERACH_API_URI = "https://www.googleapis.com/youtube/v3/search?";
const API_KEY = `${process.env.REACT_APP_YOUTUBE_API_KEY}`;

interface Props {
  keyword?: string;
}

export const YoutubeItem: React.VFC<Props> = ({ keyword }) => {
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);

  useEffect(() => {
    // クエリ文字列を定義する
    const params = {
      key: API_KEY,
      q: `${keyword}`, // 検索キーワード
      type: "video", // video,channel,playlistから選択できる
      maxResults: "10", // 結果の最大数
      order: "viewCount", // 結果の並び順を再生回数の多い順に
    };
    const queryParams = new URLSearchParams(params);

    // APIをコールする
    (async () => {
      try {
        const res = await axios.get(YOUTUBE_SERACH_API_URI + queryParams);
        const result = await JSON.parse(JSON.stringify(res.data));
        const items = await result.items;
        console.log(items);
        setVideos(items);
      } catch (err) {
        alert(err);
      }
    })();
  }, []);

  return (
    <Container>
      {videos[0] &&
        videos.map((video) => {
          return (
            <Iframe
              title="サンプル"
              id="player"
              width="640"
              height="360"
              src={"https://www.youtube.com/embed/" + video.id.videoId}
              frameBorder="0"
              allowFullScreen
            />
          );
        })}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(640px, 1fr));
  gap: 1rem;
  /* max-width: 1480px; */
  margin: 0 auto;
  padding: 0 2rem;
`;

const Iframe = styled.iframe`
  display: block;
  margin: 0 auto;
`;

// type Example = {
//   // (): YoutubeVideo[];
//   (keyword: string): YoutubeVideo[];
// };

// export const getYoutubeVideos = (keyword: string) => {
//   // クエリ文字列を定義する
//   const params = {
//     key: API_KEY,
//     q: `${keyword}`, // 検索キーワード
//     type: "video", // video,channel,playlistから選択できる
//     maxResults: "5", // 結果の最大数
//     order: "viewCount", // 結果の並び順を再生回数の多い順に
//   };
//   const queryParams = new URLSearchParams(params);

//   // APIをコールする
//   (async () => {
//     try {
//       const res = await axios.get(YOUTUBE_SERACH_API_URI + queryParams);
//       const result = await JSON.parse(JSON.stringify(res.data));
//       const items: YoutubeVideo[] = await result.items;
//       return items;
//     } catch (err) {
//       alert(err);
//     }
//   })();
// };
