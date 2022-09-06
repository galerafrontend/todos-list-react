import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import HomePage from "./features/home/HomePage";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { StyledNavLink, NavList, NavListItem } from "./styled";


const App = () => (
  <HashRouter>
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
      <Switch>
        <Route path="/lista zadan/:id">
          <TaskPage />
        </Route>
        <Route path="/strona glowna">
          <HomePage />
        </Route>
        <Route path="/lista zadan">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/strona glowna" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App;