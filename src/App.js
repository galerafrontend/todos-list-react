import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { StyledNavLink, NavList, NavListItem } from "./styled";

const App = () => (
  <HashRouter>
    <nav>
      <NavList>
        <NavListItem>
          <StyledNavLink to="/lista zadan">Lista zadań</StyledNavLink>
        </NavListItem>
        <NavListItem>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </NavListItem>
      </NavList>
      <Switch>
        <Route path="/lista zadan">
          <Tasks />
        </Route>
        <Route path="/autor">
          <Author />
        </Route>
        <Route path="/">
          <Redirect to="/lista zadan" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App;