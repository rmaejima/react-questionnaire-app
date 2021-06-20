import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { PageHeading } from "components/common/PageHeading";
import { AboutApp } from "components/top/AboutApp";
import { Button } from "components/common/Button";
// import { GetYoutubeApi } from "api/YoutubeItem";

export const Home: React.VFC = () => {
  // useEffect(() => {
  //   const i = GetYoutubeApi("ナルト");
  //   console.log(i);
  // }, []);
  return (
    <Container>
      <PageHeading>Home</PageHeading>
      <AboutApp />
      <Link to="/q1">
        <StyledButton>
          <Button>質問へ移動</Button>
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
