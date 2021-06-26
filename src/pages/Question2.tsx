import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ScoreContext } from "contexts/ScoreProvider";
import { PageHeading } from "components/common/PageHeading";
import { Button } from "components/common/Button";

export const Question2: React.VFC = () => {
  const { key, setKey } = useContext(ScoreContext);
  return (
    <Container>
      <PageHeading>質問２</PageHeading>
      <Link to="/q3">
        <StyledButton>
          <Button onClick={() => setKey(key + "大乱闘")}>大乱闘</Button>
        </StyledButton>
      </Link>
      <Link to="/q3">
        <StyledButton>
          <Button onClick={() => setKey(key + "音楽")}>音楽</Button>
        </StyledButton>
      </Link>
      <Link to="/q3">
        <StyledButton>
          <Button onClick={() => setKey(key + "スポーツ")}>スポーツ</Button>
        </StyledButton>
      </Link>
      <Link to="/q3">
        <StyledButton>
          <Button onClick={() => setKey(key + "エンタメ")}>エンタメ</Button>
        </StyledButton>
      </Link>
      <Link to="/q3">
        <StyledButton>
          <Button onClick={() => setKey(key + "バスケ")}>バスケ</Button>
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
