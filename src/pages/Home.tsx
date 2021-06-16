import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { PageHeading } from "components/common/PageHeading";
import { AboutApp } from "components/top/AboutApp";
import { Button } from "components/common/Button";
// import { callApi, Keywords } from "api/YoutubeItem";
// import { useEffect } from "react";
// import { useState } from "react";

export const Home: React.VFC = () => {
  // const [keyword, setKeyword] = useState<Keywords>();
  // useEffect(() => {
  //   const key = callApi({ keyword: "ナルト" });
  //   console.log(key);
  //   // setKeyword(key);
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
