import React from "react";
import styled from "styled-components";

interface Props {
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: React.ReactNode;
}
export const Button: React.VFC<Props> = ({
  type,
  onClick,
  className,
  children,
}) => {
  return (
    <StyledButton className={className} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  background: ${(p) => p.theme.colors.primary[500]};
  color: #000;
  font-size: 1.5rem;
  box-shadow: 0 12px 10px -6px rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  :hover {
    transform: translate(0, -5px);
    opacity: 0.8;
  }
`;

export const FormButton: React.VFC<Props> = ({
  type,
  onClick,
  className,
  children,
}) => {
  return (
    <StyledFormButton className={className} type={type} onClick={onClick}>
      {children}
    </StyledFormButton>
  );
};

const StyledFormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 100%;
  background: ${(p) => p.theme.colors.primary[500]};
  font-size: 1rem;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
  }
`;
