import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;

  &.active {
    font-weight: 700;
  }
`;

export const NavList = styled.ul`
  background: ${({ theme }) => theme.color.teal};
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 5px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: auto;
  }
`;

export const NavListItem = styled.li`
padding: 15px;
`;