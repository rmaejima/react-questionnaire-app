import React from "react";
import styled from "styled-components";

interface Props {
  type?: "text" | "button" | "color";
  name?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
export const Inputs: React.VFC<Props> = ({
  type,
  name,
  placeholder,
  onChange,
}) => {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

const StyledInput = styled.input`
  width: 100%;
  height: 2.4rem;
  padding: 0 1rem;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 0 1px ${(p) => p.theme.colors.gray[200]} inset;
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(p) => p.theme.colors.accent[500]} inset;
  }
`;
