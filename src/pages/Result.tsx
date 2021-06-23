import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useScoreContext } from "contexts/ScoreProvider";
import { PageHeading } from "components/common/PageHeading";
import { Button } from "components/common/Button";
import { getYoutubeVideos } from "api/videos";
import { YoutubeVideo } from "types/youtube";

export const Result: React.VFC = () => {
  const { score, setScore } = useScoreContext();
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);
  useEffect(() => {
    (async () => {
      setVideos(await getYoutubeVideos(score));
    })();
  }, []);
  return (
    <Container>
      <PageHeading>結果</PageHeading>
      <Text>こんな動画はどうでしょうか？</Text>
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
      <Link to="/">
        <StyledButton>
          <Button>ホームに戻る</Button>
        </StyledButton>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 3rem 0 3rem;
  background-color: ${(p) => p.theme.colors.base[500]};
`;

const Text = styled.p`
  padding-top: 1rem;
  font-size: 2rem;
  text-align: center; ;
`;

const StyledButton = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
`;

const Iframe = styled.iframe`
  display: block;
  margin: 0 auto;
`;
