import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { SearchContext } from "contexts/SearchProvider";
import { PageHeading } from "components/common/PageHeading";
import { Button } from "components/common/Button";
import { useEffect } from "react";

const nextPath: string = "q2";

export const CategoryQuestion: React.VFC = () => {
  const { searchElement, setSearchElement } = useContext(SearchContext);
  useEffect(() => {
    setSearchElement({ ...searchElement, category: "" });
  }, []);

  return (
    <Container>
      <PageHeading>カテゴリーを選択してください</PageHeading>
      <Link to={nextPath}>
        <StyledButton>
          <Button
            onClick={() =>
              setSearchElement({ ...searchElement, category: "1" })
            }
          >
            映画とアニメ
          </Button>
        </StyledButton>
      </Link>
      <Link to={nextPath}>
        <StyledButton>
          <Button
            onClick={() =>
              setSearchElement({ ...searchElement, category: "2" })
            }
          >
            自動車と乗り物
          </Button>
        </StyledButton>
      </Link>
      <Link to={nextPath}>
        <StyledButton>
          <Button
            onClick={() =>
              setSearchElement({ ...searchElement, category: "10" })
            }
          >
            音楽
          </Button>
        </StyledButton>
      </Link>
      <Link to={nextPath}>
        <StyledButton>
          <Button
            onClick={() =>
              setSearchElement({ ...searchElement, category: "15" })
            }
          >
            ペットと動物
          </Button>
        </StyledButton>
      </Link>
      <Link to={nextPath}>
        <StyledButton>
          <Button
            onClick={() =>
              setSearchElement({ ...searchElement, category: "17" })
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
              setSearchElement({ ...searchElement, category: "19" })
            }
          >
            旅行とイベント
          </Button>
        </StyledButton>
      </Link>
      <Link to={nextPath}>
        <StyledButton>
          <Button
            onClick={() =>
              setSearchElement({ ...searchElement, category: "20" })
            }
          >
            ゲーム
          </Button>
        </StyledButton>
      </Link>
      <Link to={nextPath}>
        <StyledButton>
          <Button
            onClick={() =>
              setSearchElement({ ...searchElement, category: "22" })
            }
          >
            ブログ
          </Button>
        </StyledButton>
      </Link>
      <Link to={nextPath}>
        <StyledButton>
          <Button
            onClick={() =>
              setSearchElement({ ...searchElement, category: "23" })
            }
          >
            コメディー
          </Button>
        </StyledButton>
      </Link>
      <Link to={nextPath}>
        <StyledButton>
          <Button
            onClick={() =>
              setSearchElement({ ...searchElement, category: "24" })
            }
          >
            エンターテインメント
          </Button>
        </StyledButton>
      </Link>
      <Link to={nextPath}>
        <StyledButton>
          <Button
            onClick={() =>
              setSearchElement({ ...searchElement, category: "25" })
            }
          >
            ニュースと政治
          </Button>
        </StyledButton>
      </Link>
      <Link to={nextPath}>
        <StyledButton>
          <Button
            onClick={() =>
              setSearchElement({ ...searchElement, category: "26" })
            }
          >
            ハウツーとスタイル
          </Button>
        </StyledButton>
      </Link>
      <Link to={nextPath}>
        <StyledButton>
          <Button
            onClick={() =>
              setSearchElement({ ...searchElement, category: "27" })
            }
          >
            教育
          </Button>
        </StyledButton>
      </Link>
      <Link to={nextPath}>
        <StyledButton>
          <Button
            onClick={() =>
              setSearchElement({ ...searchElement, category: "28" })
            }
          >
            科学と技術
          </Button>
        </StyledButton>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 3rem;
  background-color: ${(p) => p.theme.colors.base[500]};
`;

const StyledButton = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
`;
