import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useScoreContext } from "contexts/ScoreProvider";
import { PageHeading } from "components/common/PageHeading";
import { Button } from "components/common/Button";
import { YoutubeItem } from "api/YoutubeItem";

export const Result: React.VFC = () => {
  const { score, setScore } = useScoreContext();
  return (
    <Container>
      <PageHeading>結果</PageHeading>
      <Text>こんな動画はどうでしょうか？</Text>
      <YoutubeItem keyword={score} />

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
  height: 100vh;
  padding-top: 3rem;
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
