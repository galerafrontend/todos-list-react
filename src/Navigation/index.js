import { toAuthor, toHome, toTasks } from "../routes";
import { NavList, NavListItem, StyledNavLink } from "./styled";

const Navigation = () => {
  return (
    <nav>
      <NavList>
        <NavListItem>
          <StyledNavLink to={toHome()}>Home</StyledNavLink>
        </NavListItem>
        <NavListItem>
          <StyledNavLink to={toTasks()}>To-do list</StyledNavLink>
        </NavListItem>
        <NavListItem>
          <StyledNavLink to={toAuthor()}>About author</StyledNavLink>
        </NavListItem>
      </NavList>
    </nav>
  )
};

export default Navigation;