import { NavList, NavListItem, StyledNavLink } from "./styled";

const Navigation = () => {
  return (
    <nav>
      <NavList>
        <NavListItem>
          <StyledNavLink to="/strona glowna">Strona główna</StyledNavLink>
        </NavListItem>
        <NavListItem>
          <StyledNavLink to="/lista zadan">Lista zadań</StyledNavLink>
        </NavListItem>
        <NavListItem>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </NavListItem>
      </NavList>
    </nav>
  )
};

export default Navigation;