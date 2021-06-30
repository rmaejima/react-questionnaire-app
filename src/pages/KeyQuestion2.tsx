import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { SearchContext } from "contexts/SearchProvider";
import { PageHeading } from "components/common/PageHeading";
import { Button } from "components/common/Button";

const nextPath: string = "/result";

export const KeyQuestion2: React.VFC = () => {
  const { searchElement, setSearchElement } = useContext(SearchContext);
  const [keyword, setkeyword] = useState<string>("");
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchElement({
      ...searchElement,
      key: searchElement.key + keyword,
    });
    history.push("/result");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setkeyword(event.target.value);
  };
  return (
    <Container>
      <PageHeading>気になるキーワードを入力してください</PageHeading>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="KEYWORD"
          placeholder="キーワード"
          onChange={handleChange}
        />
        <StyledButton>
          <Button type="submit">押してください</Button>
        </StyledButton>
      </form>
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
