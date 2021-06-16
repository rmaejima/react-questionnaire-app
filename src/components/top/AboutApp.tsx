import React from "react";
import styled from "styled-components";

export const AboutApp: React.VFC = () => {
  return (
    <Container>
      <Heading>このアプリの説明</Heading>
      <Text>
        useContextを用いて状態管理を実装するためにこのアプリを作成しました。
        <br />
        後にAPIやFirebaseと連携してより高度なアプリケーションを実装したいと考えています。
        <br />
        <br />
        挙動などの説明も加える
      </Text>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 1rem auto 0;
  padding: 1rem 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
`;

const Heading = styled.h1`
  font-size: 2rem;
`;

const Text = styled.p`
  padding-top: 1rem;
  font-size: 1.5rem;
`;
