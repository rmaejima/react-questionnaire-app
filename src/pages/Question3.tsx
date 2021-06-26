import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ScoreContext } from "contexts/ScoreProvider";
import { PageHeading } from "components/common/PageHeading";
import { Button } from "components/common/Button";

export const Question3: React.VFC = () => {
  const { key, setKey } = useContext(ScoreContext);
  return (
    <Container>
      <PageHeading>質問３</PageHeading>
      <Link to="/result">
        <StyledButton>
          <Button onClick={() => setKey(key + " すごい")}>すごい</Button>
        </StyledButton>
      </Link>
      <Link to="/result">
        <StyledButton>
          <Button onClick={() => setKey(key + " バカ")}>バカ</Button>
        </StyledButton>
      </Link>
      <Link to="/result">
        <StyledButton>
          <Button onClick={() => setKey(key + " 天才")}>天才</Button>
        </StyledButton>
      </Link>
      <Link to="/result">
        <StyledButton>
          <Button onClick={() => setKey(key + " 凡人")}>凡人</Button>
        </StyledButton>
      </Link>
      <Link to="/result">
        <StyledButton>
          <Button onClick={() => setKey(key + "")}></Button>
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
