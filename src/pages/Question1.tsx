import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ScoreContext } from "contexts/ScoreProvider";
import { PageHeading } from "components/common/PageHeading";
import { Button } from "components/common/Button";
import { useEffect } from "react";

export const Question1: React.VFC = () => {
  const { setCategory } = useContext(ScoreContext);
  useEffect(() => {
    setCategory("");
  }, []);

  return (
    <Container>
      <PageHeading>カテゴリーを選択してください</PageHeading>
      <Link to="/q2">
        <StyledButton>
          <Button onClick={() => setCategory("1")}>アニメ</Button>
        </StyledButton>
      </Link>
      <Link to="/q2">
        <StyledButton>
          <Button onClick={() => setCategory("2")}>エンタメ</Button>
        </StyledButton>
      </Link>
      <Link to="/q2">
        <StyledButton>
          <Button onClick={() => setCategory("3")}>芸能</Button>
        </StyledButton>
      </Link>
      <Link to="/q2">
        <StyledButton>
          <Button onClick={() => setCategory("4")}>悲しい</Button>
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
