import styled from "styled-components";
import background from "./background_home.png";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url("${background}");
  background-size: cover;
  background-position: center;
`;

export const Paragraph = styled.p`
  flex-basis: 900px;
  text-align: center;
  margin: 100px;
  padding: 100px;
  background: ${({theme}) => theme.color.white};
  font-weight: 700;
  font-size: 50px;
  border-radius: 70px;
  font-family: 'Antic Slab', serif;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-basis: 500px;
    font-size: 20px;
    margin: 20px;
    padding: 40px 10px 40px 10px;
  }
`;