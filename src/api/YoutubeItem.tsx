import React, { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";
import styled from "styled-components";

const YOUTUBE_SERACH_API_URI = "https://www.googleapis.com/youtube/v3/search?";
const API_KEY = `${process.env.REACT_APP_YOUTUBE_API_KEY}`;

interface Props {
  keyword?: string;
}

export const YoutubeItem: React.VFC<Props> = ({ keyword }) => {
  const [videoId, setVideoId] = useState("");
  // const [videoIds, setVideoIds] = useState([]);

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
        console.log(result.items);

        setVideoId(word);

        // const hairetu = Object.entries(result.items);
        // console.log(hairetu);
        // const items = await result.items;
        // setVideoIds(items);
      } catch (err) {
        console.log("上手くいきませんでした");
      }
    })();
  }, []);

  return (
    <div>
      {/* {videoId[0] &&
        videoIds.map((videoId) => {
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
        })} */}
      <Iframe
        title="サンプル"
        id="player"
        width="640"
        height="360"
        src={"https://www.youtube.com/embed/" + videoId}
        frameBorder="0"
        allowFullScreen
      />
      {/* <p>{videoIds}</p> */}
    </div>
  );
};

const Iframe = styled.iframe`
  display: block;
  margin: 0 auto;
`;

//tbd
// export const GetYoutubeApi: any = async (keyword: string) => {
//   try {
//     const config: AxiosRequestConfig = {
//       url: YOUTUBE_SERACH_API_URI,
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json; charset=utf-8",
//       },
//       params: {
//         part: "snippet",
//         q: keyword,
//         maxResults: 10,
//         key: process.env.REACT_APP_YOUTUBE_API_KEY, // 取得したAPIキーを設定
//       },
//     };
//     const res = await axios(config);
//     const result = await JSON.parse(JSON.stringify(res.data));
//     const Items = await result.items[0];
//     const word = Items.id.videoId;
//     // return Items;
//     return word;
//   } catch (err) {
//     alert(err);
//   }
// };
