import axios from "axios";
import { YoutubeVideo } from "types/youtube";

const YOUTUBE_SERACH_API_URI = "https://www.googleapis.com/youtube/v3/search?";
const API_KEY = `${process.env.REACT_APP_YOUTUBE_API_KEY}`;

export const getYoutubeVideos = async (
  keyword: string,
  category: string,
  order: string
): Promise<YoutubeVideo[]> => {
  const params = {
    key: API_KEY,
    part: "snippet",
    q: `${keyword}`,
    type: "video",
    maxResults: "5",
    order: `${order}`,
    videoCategoryId: `${category}`,
  };
  const queryParams = new URLSearchParams(params);

  try {
    const res = await axios.get(YOUTUBE_SERACH_API_URI + queryParams);
    const result = await JSON.parse(JSON.stringify(res.data));
    const items: YoutubeVideo[] = await result.items;
    console.log(items);
    return items;
  } catch (err) {
    return err;
  }
};
