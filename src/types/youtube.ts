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
  kind: string | "youtube#searchResult";
  etag: string;
  id: {
    channelId: string;
    kind: string | "youtube#channel";
  };
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: string;
    publishedAt: string;
    thumbnails: {
      title: string;
      default: {
        url: string;
      };
      medium: {
        url: string;
      };
      high: {
        url: string;
      };
    };
  };
}
