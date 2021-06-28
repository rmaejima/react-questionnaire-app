import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ChannelContext } from "contexts/ChannelProvider";
import { PageHeading } from "components/common/PageHeading";
import { Button } from "components/common/Button";
import { getYoutubeChannels } from "api/channels";
import { YoutubeChannel } from "types/youtube";

export const ChannelResult: React.VFC = () => {
  // const { channelElement } = useContext(ChannelContext);
  const [channels, setChannels] = useState<YoutubeChannel[]>([]);
  useEffect(() => {
    // (async () => {
    //   setChannels(
    //     await getYoutubeChannels(
    //       // channelElement.category,
    //       // channelElement.maxResults
    //       "GCR2FtaW5n",
    //       "10"
    //     )
    //   );
    // })();
    getYoutubeChannels("NBA バスケットボール");
  }, []);
  return (
    <Container>
      <PageHeading>結果</PageHeading>
      <Text>こんな動画はどうでしょうか？</Text>
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
