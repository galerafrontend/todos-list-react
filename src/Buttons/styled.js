import styled, { css } from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: teal;
  transition: 0.3s;
  font-size: 17px;
  margin: 0 0 0 20px;

  @media(max-width: 768px) {
    flex-basis: 100%;
    padding: 20px;
  }

  ${({disabled}) => disabled && css`
    color: #ddd;
    border: none;
    cursor: auto;
  `}

  &:hover {
    cursor: pointer;
    color: hsl(180, 100%, 35%);
  }
`;