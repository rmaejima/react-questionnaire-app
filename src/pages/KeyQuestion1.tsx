import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { SearchContext } from "contexts/SearchProvider";
import { PageHeading } from "components/common/PageHeading";
import { Button } from "components/common/Button";

const nextPath: string = "/q4";

export const KeyQuestion1: React.VFC = () => {
  const { searchElement, setSearchElement } = useContext(SearchContext);
  return (
    <Container>
      <PageHeading>気になるキーワードを選択してください</PageHeading>
      <Link to={nextPath}>
        <StyledButton>
          <Button
            onClick={() =>
              setSearchElement({ ...searchElement, key: "大乱闘" })
            }
          >
            大乱闘
          </Button>
        </StyledButton>
      </Link>
      <Link to={nextPath}>
        <StyledButton>
          <Button
            onClick={() => setSearchElement({ ...searchElement, key: "音楽" })}
          >
            音楽
          </Button>
        </StyledButton>
      </Link>
      <Link to={nextPath}>
        <StyledButton>
          <Button
            onClick={() =>
              setSearchElement({ ...searchElement, key: "スポーツ" })
            }
          >
            スポーツ
          </Button>
        </StyledButton>
      </Link>
      <Link to={nextPath}>
        <StyledButton>
          <Button
            onClick={() =>
              setSearchElement({ ...searchElement, key: "エンタメ" })
            }
          >
            エンタメ
          </Button>
        </StyledButton>
      </Link>
      <Link to={nextPath}>
        <StyledButton>
          <Button
            onClick={() =>
              setSearchElement({ ...searchElement, key: "バスケ" })
            }
          >
            バスケ
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
