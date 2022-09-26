import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;

  &:hover {
    border-bottom: 2px solid;
  }

  &.active {
    font-weight: 700;
  }
`;

export const NavList = styled.ul`
  background: ${({ theme }) => theme.color.teal};
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 5px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-direction: column;
  }
`;

export const NavListItem = styled.li`
  padding: 15px;
`;