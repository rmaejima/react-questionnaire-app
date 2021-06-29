import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ChannelContext } from "contexts/ChannelProvider";
import { PageHeading } from "components/common/PageHeading";
import { Button } from "components/common/Button";

const nextPath: string = "ch-result";

export const ChannelQuestion: React.VFC = () => {
  const { channelElement, setChannelElement } = useContext(ChannelContext);
  return (
    <Container>
      <PageHeading>気になるキーワードを選択してください</PageHeading>
      <Link to={nextPath}>
        <StyledButton>
          <Button
            onClick={() =>
              setChannelElement({
                ...channelElement,
                keyword: "黒子のバスケ",
                maxResults: "5",
              })
            }
          >
            カテゴリー１の表示5
          </Button>
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
