import styled from "styled-components";
import { YoutubeVideo } from "types/youtube";

interface Props {
  video: YoutubeVideo;
}

export const VideoListItem: React.VFC<Props> = ({ video }) => {
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
};

const Iframe = styled.iframe`
  display: block;
  margin: 0 auto;
`;
