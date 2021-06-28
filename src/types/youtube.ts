export interface YoutubeVideo {
  kind: string | "youtube#searchResult";
  etag: string;
  id: {
    kind: string;
    videoId: string;
    channelId: string;
    playlistId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      key: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
  };
}

export interface YoutubeChannel {
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
  statistics: {
    subscriberCount: number; //チャンネル登録者数
  };
  items: YoutubeVideo[];
}
