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
      {/* 映画とアニメ */}
      {searchElement.category === "1" && (
        <>
          <Link to={nextPath}>
            <StyledButton>
              <Button
                onClick={() =>
                  setSearchElement({ ...searchElement, key: "ホラー" })
                }
              >
                ホラー
              </Button>
            </StyledButton>
          </Link>
          <Link to={nextPath}>
            <StyledButton>
              <Button
                onClick={() =>
                  setSearchElement({ ...searchElement, key: "ギャグ" })
                }
              >
                ギャグ
              </Button>
            </StyledButton>
          </Link>
          <Link to={nextPath}>
            <StyledButton>
              <Button
                onClick={() =>
                  setSearchElement({ ...searchElement, key: "アクション" })
                }
              >
                アクション
              </Button>
            </StyledButton>
            <Link to={nextPath}>
              <StyledButton>
                <Button
                  onClick={() =>
                    setSearchElement({ ...searchElement, key: "恋愛" })
                  }
                >
                  恋愛
                </Button>
              </StyledButton>
            </Link>
          </Link>
        </>
      )}
      {/*自動車と乗り物 */}
      {searchElement.category === "2" && (
        <>
          <Link to={nextPath}>
            <StyledButton>
              <Button
                onClick={() =>
                  setSearchElement({ ...searchElement, key: "レース" })
                }
              >
                レース
              </Button>
            </StyledButton>
          </Link>
          <Link to={nextPath}>
            <StyledButton>
              <Button
                onClick={() =>
                  setSearchElement({
                    ...searchElement,
                    key: "シミュレーション",
                  })
                }
              >
                シミュレーション
              </Button>
            </StyledButton>
          </Link>
          <Link to={nextPath}>
            <StyledButton>
              <Button
                onClick={() =>
                  setSearchElement({ ...searchElement, key: "飛行機" })
                }
              >
                飛行機
              </Button>
            </StyledButton>
            <Link to={nextPath}>
              <StyledButton>
                <Button
                  onClick={() =>
                    setSearchElement({ ...searchElement, key: "船" })
                  }
                >
                  船
                </Button>
              </StyledButton>
            </Link>
          </Link>
        </>
      )}
      {/* 音楽 */}
      {searchElement.category === "10" && (
        <>
          <Link to={nextPath}>
            <StyledButton>
              <Button
                onClick={() =>
                  setSearchElement({ ...searchElement, key: "邦楽" })
                }
              >
                邦楽
              </Button>
            </StyledButton>
          </Link>
          <Link to={nextPath}>
            <StyledButton>
              <Button
                onClick={() =>
                  setSearchElement({ ...searchElement, key: "洋楽" })
                }
              >
                洋楽
              </Button>
            </StyledButton>
          </Link>
          <Link to={nextPath}>
            <StyledButton>
              <Button
                onClick={() =>
                  setSearchElement({ ...searchElement, key: "K-POP" })
                }
              >
                K-POP
              </Button>
            </StyledButton>
            <Link to={nextPath}>
              <StyledButton>
                <Button
                  onClick={() =>
                    setSearchElement({ ...searchElement, key: "EDM" })
                  }
                >
                  EDM
                </Button>
              </StyledButton>
            </Link>
          </Link>
        </>
      )}
      {/* ペットと動物 */}
      {searchElement.category === "15" && (
        <>
          <Link to={nextPath}>
            <StyledButton>
              <Button
                onClick={() =>
                  setSearchElement({ ...searchElement, key: "犬" })
                }
              >
                犬
              </Button>
            </StyledButton>
          </Link>
          <Link to={nextPath}>
            <StyledButton>
              <Button
                onClick={() =>
                  setSearchElement({ ...searchElement, key: "猫" })
                }
              >
                猫
              </Button>
            </StyledButton>
          </Link>
          <Link to={nextPath}>
            <StyledButton>
              <Button
                onClick={() =>
                  setSearchElement({ ...searchElement, key: "めずらしい" })
                }
              >
                めずらしい
              </Button>
            </StyledButton>
            <Link to={nextPath}>
              <StyledButton>
                <Button
                  onClick={() =>
                    setSearchElement({ ...searchElement, key: "かわいい" })
                  }
                >
                  かわいい
                </Button>
              </StyledButton>
            </Link>
          </Link>
        </>
      )}
      {/* スポーツ */}
      {searchElement.category === "17" && (
        <>
          <Link to={nextPath}>
            <StyledButton>
              <Button
                onClick={() =>
                  setSearchElement({ ...searchElement, key: "球技" })
                }
              >
                球技
              </Button>
            </StyledButton>
          </Link>
          <Link to={nextPath}>
            <StyledButton>
              <Button
                onClick={() =>
                  setSearchElement({
                    ...searchElement,
                    key: "マイナースポーツ",
                  })
                }
              >
                マイナースポーツ
              </Button>
            </StyledButton>
          </Link>
          <Link to={nextPath}>
            <StyledButton>
              <Button
                onClick={() =>
                  setSearchElement({ ...searchElement, key: "チーム競技" })
                }
              >
                チーム競技
              </Button>
            </StyledButton>
            <Link to={nextPath}>
              <StyledButton>
                <Button
                  onClick={() =>
                    setSearchElement({ ...searchElement, key: "個人競技" })
                  }
                >
                  個人競技
                </Button>
              </StyledButton>
            </Link>
          </Link>
        </>
      )}
      {/*ゲーム */}
      {searchElement.category === "20" && (
        <>
          <Link to={nextPath}>
            <StyledButton>
              <Button
                onClick={() =>
                  setSearchElement({ ...searchElement, key: "ホラー" })
                }
              >
                ホラー
              </Button>
            </StyledButton>
          </Link>
          <Link to={nextPath}>
            <StyledButton>
              <Button
                onClick={() =>
                  setSearchElement({ ...searchElement, key: "FPS" })
                }
              >
                FPS
              </Button>
            </StyledButton>
          </Link>
          <Link to={nextPath}>
            <StyledButton>
              <Button
                onClick={() =>
                  setSearchElement({ ...searchElement, key: "アクション" })
                }
              >
                アクション
              </Button>
            </StyledButton>
            <Link to={nextPath}>
              <StyledButton>
                <Button
                  onClick={() =>
                    setSearchElement({
                      ...searchElement,
                      key: "オンライン対戦",
                    })
                  }
                >
                  オンライン対戦
                </Button>
              </StyledButton>
            </Link>
          </Link>
        </>
      )}
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
