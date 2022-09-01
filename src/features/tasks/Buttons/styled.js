import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.color.teal};
  transition: 0.3s;
  font-size: 17px;
  margin: 0 0 0 20px;
  cursor: pointer;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-basis: 100%;
    padding: 20px;
  }

  &:hover {
    color: hsl(180, 100%, 35%);
  }

  &:active {
    color: hsl(180, 100%, 45%);
  }

  &:disabled {
    color: ${({ theme }) => theme.color.alto};
    cursor: auto;
  }
`;