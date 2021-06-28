import axios from "axios";
import { YoutubeChannel } from "types/youtube";

const YOUTUBE_SERACH_API_URI = "https://www.googleapis.com/youtube/v3/search?";
const API_KEY = `${process.env.REACT_APP_YOUTUBE_API_KEY}`;

export const getYoutubeChannels = async (
  category: string
): Promise<YoutubeChannel[]> => {
  const params = {
    key: API_KEY,
    q: `${category}`,
    part: "snippet",
    type: "channel",
    order: "viewCount",
    maxResults: "10",
  };
  const queryParams = new URLSearchParams(params);
  try {
    const res = await axios.get(YOUTUBE_SERACH_API_URI + queryParams);
    const result = await JSON.parse(JSON.stringify(res.data));
    console.log(result);
    const items: YoutubeChannel[] = await result.items;
    console.log(items);
    return items;
  } catch (err) {
    return err;
  }
};
