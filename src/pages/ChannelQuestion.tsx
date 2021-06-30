import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ChannelContext } from "contexts/ChannelProvider";
import { PageHeading } from "components/common/PageHeading";
import { Form } from "components/common/Form";
import { Inputs } from "components/common/Inputs";
import { FormButton } from "components/common/Button";

const nextPath: string = "ch-result";

export const ChannelQuestion: React.VFC = () => {
  const { channelElement, setChannelElement } = useContext(ChannelContext);
  const [keyword, setKeyword] = useState<string>("");
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setChannelElement({
      ...channelElement,
      keyword: keyword,
    });
    history.push("/ch-result");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };
  return (
    <Container>
      <PageHeading>気になるキーワードを入力してください</PageHeading>
      {/* <Link to={nextPath}>
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
      </Link> */}
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
