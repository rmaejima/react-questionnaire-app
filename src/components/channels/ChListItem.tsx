import styled from "styled-components";
import { YoutubeChannel } from "types/youtube";

interface Props {
  channel: YoutubeChannel;
}

export const ChListItem: React.VFC<Props> = ({ channel }) => {
  return (
    <Container>
      <Title>{channel.snippet.channelTitle}</Title>
      <Description>{channel.snippet.description}</Description>
      <Img src={channel.snippet.thumbnails.default.url} />
    </Container>
  );
};

const Container = styled.div`
  max-width: 600px;
  margin: 5rem auto 0;
  padding: 2rem;
  background-color: #fff;
  border-radius: 2rem;
`;

const Title = styled.h1`
  text-align: center;
`;

const Description = styled.p`
  text-align: center;
`;

const Img = styled.img`
  display: block;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%; ;
`;
