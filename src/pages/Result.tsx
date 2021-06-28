import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { SearchContext } from "contexts/SearchProvider";
import { PageHeading } from "components/common/PageHeading";
import { Button } from "components/common/Button";
import { getYoutubeVideos } from "api/videos";
import { YoutubeVideo } from "types/youtube";
import { VideoList } from "components/videos";

export const Result: React.VFC = () => {
  const { searchElement } = useContext(SearchContext);
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);
  useEffect(() => {
    (async () => {
      setVideos(
        await getYoutubeVideos(
          searchElement.key,
          searchElement.category,
          searchElement.order
        )
      );
    })();
  }, []);
  return (
    <Container>
      <PageHeading>結果</PageHeading>
      <Text>こんな動画はどうでしょうか？</Text>
      <VideoList videos={videos} />
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
