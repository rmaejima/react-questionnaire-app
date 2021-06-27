import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { SearchContext } from "contexts/SearchProvider";
import { PageHeading } from "components/common/PageHeading";
import { Button } from "components/common/Button";
import { useEffect } from "react";

export const Question1: React.VFC = () => {
  const { searchElement, setSearchElement } = useContext(SearchContext);
  useEffect(() => {
    setSearchElement({ ...searchElement, category: "" });
  }, []);

  return (
    <Container>
      <PageHeading>カテゴリーを選択してください</PageHeading>
      <Link to="/q2">
        <StyledButton>
          <Button
            onClick={() =>
              setSearchElement({ ...searchElement, category: "1" })
            }
          >
            アニメ
          </Button>
        </StyledButton>
      </Link>
      <Link to="/q2">
        <StyledButton>
          <Button
            onClick={() =>
              setSearchElement({ ...searchElement, category: "2" })
            }
          >
            エンタメ
          </Button>
        </StyledButton>
      </Link>
      <Link to="/q2">
        <StyledButton>
          <Button
            onClick={() =>
              setSearchElement({ ...searchElement, category: "3" })
            }
          >
            芸能
          </Button>
        </StyledButton>
      </Link>
      <Link to="/q2">
        <StyledButton>
          <Button
            onClick={() =>
              setSearchElement({ ...searchElement, category: "4" })
            }
          >
            悲しい
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
