import styled from "styled-components";

export const FormField = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  margin: 15px;
  padding-bottom: 20px;
  padding-top: 5px;

  @media (max-width:768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const Input = styled.input`
  border: 2px solid #ddd;
  padding: 10px;
`;

export const Button = styled.button`
  color: white;
  background-color: teal;
  border: none;
  padding: 10px;
  border-radius: 3px;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    background-color: hsl(180, 100%, 35%);
    transform: scaleY(1.05) scaleX(1.05);
  }

  &:active {
    background-color: hsl(180, 100%, 40%);
  }
`;