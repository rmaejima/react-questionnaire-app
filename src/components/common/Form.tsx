import React from "react";
import styled from "styled-components";

interface Props {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  children?: React.ReactNode;
}
export const Form: React.VFC<Props> = ({ onSubmit, children }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

const StyledForm = styled.form`
  display: flex;
  width: 600px;
  margin: 0 auto;
`;
