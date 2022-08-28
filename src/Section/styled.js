import styled from "styled-components";

export const MainSection = styled.section`
  background: ${({ theme }) => theme.color.white};
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ddd;
  padding: 20px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  margin: 0;
`;