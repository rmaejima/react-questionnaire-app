import styled from "styled-components";

import { YoutubeChannel } from "types/youtube";
import { ChListItem } from "components/channels/ChListItem";

interface Props {
  channels: YoutubeChannel[];
}

export const ChList: React.VFC<Props> = ({ channels }) => {
  return (
    <Container>
      {channels[0] &&
        channels.map((channel) => {
          return <ChListItem channel={channel} />;
        })}
    </Container>
  );
};

const Container = styled.div``;
