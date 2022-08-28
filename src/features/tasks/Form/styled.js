import styled from "styled-components";

export const FormField = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  margin: 15px;
  padding-bottom: 20px;
  padding-top: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.color.alto};
  padding: 10px;
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.teal};
  border: none;
  padding: 10px;
  border-radius: 3px;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    filter: brightness(130%);
    transform: scaleY(1.05) scaleX(1.05);
  }

  &:active {
    filter: brightness(140%);
  }
`;