import React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
}

export const PageHeading: React.VFC<Props> = ({ children }) => {
  return <Text>{children}</Text>;
};

const Text = styled.h1`
  font-size: 4rem;
  text-align: center;
`;
