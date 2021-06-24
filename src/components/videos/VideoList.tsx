import styled from "styled-components";

import { YoutubeVideo } from "types/youtube";
import { VideoListItem } from "components/videos/VideoListItem";

interface Props {
  videos: YoutubeVideo[];
}

export const VideoList: React.VFC<Props> = ({ videos }) => {
  return (
    <Container>
      {videos[0] &&
        videos.map((video) => {
          return <VideoListItem video={video} />;
        })}
    </Container>
  );
};

const Container = styled.div``;
