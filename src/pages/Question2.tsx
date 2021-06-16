import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useScoreContext } from "contexts/ScoreProvider";
import { PageHeading } from "components/common/PageHeading";
import { Button } from "components/common/Button";

export const Question2: React.VFC = () => {
  const { score, setScore } = useScoreContext();
  return (
    <Container>
      <PageHeading>質問２</PageHeading>
      <Link to="/q3">
        <StyledButton>
          <Button onClick={() => setScore(score + 4)}>+4</Button>
        </StyledButton>
      </Link>
      <Link to="/q3">
        <StyledButton>
          <Button onClick={() => setScore(score + 3)}>+3</Button>
        </StyledButton>
      </Link>
      <Link to="/q3">
        <StyledButton>
          <Button onClick={() => setScore(score + 2)}>+2</Button>
        </StyledButton>
      </Link>
      <Link to="/q3">
        <StyledButton>
          <Button onClick={() => setScore(score + 1)}>+1</Button>
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

const StyledButton = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
`;
