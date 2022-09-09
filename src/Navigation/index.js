import { toAuthor, toHome, toTasks } from "../routes";
import { NavList, NavListItem, StyledNavLink } from "./styled";

const Navigation = () => {
  return (
    <nav>
      <NavList>
        <NavListItem>
          <StyledNavLink to={toHome()}>Strona główna</StyledNavLink>
        </NavListItem>
        <NavListItem>
          <StyledNavLink to={toTasks()}>Lista zadań</StyledNavLink>
        </NavListItem>
        <NavListItem>
          <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
        </NavListItem>
      </NavList>
    </nav>
  )
};

export default Navigation;