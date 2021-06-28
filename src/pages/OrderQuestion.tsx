import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { SearchContext } from "contexts/SearchProvider";
import { PageHeading } from "components/common/PageHeading";
import { Button } from "components/common/Button";

const nextPath: string = "/q3";

export const OrderQuestion: React.VFC = () => {
  const { searchElement, setSearchElement } = useContext(SearchContext);
  return (
    <Container>
      <PageHeading>検索順を選択してください</PageHeading>
      <Link to={nextPath}>
        <StyledButton>
          <Button
            onClick={() =>
              setSearchElement({ ...searchElement, order: "date" })
            }
          >
            投稿最新順
          </Button>
        </StyledButton>
      </Link>
      <Link to={nextPath}>
        <StyledButton>
          <Button
            onClick={() =>
              setSearchElement({ ...searchElement, order: "rating" })
            }
          >
            評価順
          </Button>
        </StyledButton>
      </Link>
      <Link to={nextPath}>
        <StyledButton>
          <Button
            onClick={() =>
              setSearchElement({ ...searchElement, order: "relevance" })
            }
          >
            検索クエリとの関連性が高い順
          </Button>
        </StyledButton>
      </Link>
      <Link to={nextPath}>
        <StyledButton>
          <Button
            onClick={() =>
              setSearchElement({ ...searchElement, order: "title" })
            }
          >
            タイトルのアルファベット順
          </Button>
        </StyledButton>
      </Link>
      <Link to={nextPath}>
        <StyledButton>
          <Button
            onClick={() =>
              setSearchElement({ ...searchElement, order: "viewCount" })
            }
          >
            再生回数順
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
