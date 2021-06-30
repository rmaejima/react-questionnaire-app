import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { SearchContext } from "contexts/SearchProvider";
import { PageHeading } from "components/common/PageHeading";
import { Inputs } from "components/common/Inputs";
import { Form } from "components/common/Form";
import { FormButton } from "components/common/Button";

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
      <StyledForm>
        <Form onSubmit={handleSubmit}>
          <Inputs
            type="text"
            name="KEYWORD"
            placeholder="キーワード"
            onChange={handleChange}
          />
          <StyledButton>
            <FormButton type="submit">検索</FormButton>
          </StyledButton>
        </Form>
      </StyledForm>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 3rem;
  background-color: ${(p) => p.theme.colors.base[500]};
`;

const StyledForm = styled.div`
  padding-top: 2rem;
`;

const StyledButton = styled.div``;
